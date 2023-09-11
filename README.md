# Webpage of Chixodo.xyz

## Deployment

0. Run IPFS Daemon

```bash
ipfs daemon > dist/ipfs.log &
```

1. Generate Key or import if existing

```bash
#Generate new Key (run only if really required!):
#ipfs key gen --size 2048 chixodo.xyz
#mkdir dist
#ipfs key export chixodo.xyz -o dist/chixodo.xyz.key
#ipfs key export chixodo.xyz --format=pem-pkcs8-cleartext -o dist/chixodo.xyz.pem

#Import Key:
ipfs key import chixodo.xyz dist/chixodo.xyz.key
```

2. Add Webpage to ipfs and publish

```bash
ipfsnamehash=$(ipfs name publish --quieter --lifetime "2190h" --key=chixodo.xyz $( ipfs add --recursive --ignore-rules-path=.gitignore --quieter . ))
echo "Published to $ipfsnamehash"
echo "DNS Record template:"
echo "_dnslink 3600 IN TXT dnslink=/ipns/$ipfsnamehash"
```

3. DNS

Create TXT DNS Record: _dnslink IN TXT dnslink=/ipns/[ipfs name hash]

4. Pinning

Using DNSLink:

- Local/Standalone: `ipfs pin add $(ipfs name resolve chixodo.xyz)`
- Cluster: `ipfs-cluster-ctl --basic-auth user:pw --no-check-certificate pin add $(ipfs name resolve chixodo.xyz)`

Using Names:

- Local/Standalone: `ipfs pin add $(ipfs name resolve $ipfsnamehash)`
- Cluster: `ipfs-cluster-ctl --basic-auth user:pw --no-check-certificate pin add $(ipfs name resolve $ipfsnamehash)`

Using Pinata:

>Make sure you have your pinata api key ready and saved in a file that looks like this:  
>PinataAPIKey="asdf1234..."  
>PinataAPISecret="asdf1234..."  
>PinataJWT="asdf1234ASDF..."  

```bash
source dist/pinata-api-key.txt
curl --location --request POST "https://api.pinata.cloud/pinning/pinByHash" \
--header "Authorization: Bearer $PinataJWT" \
--header "Content-Type: application/json" \
--data-raw "{
    \"hashToPin\": \"[INSERT IPFS CIDv1 HASH]\",
    \"pinataMetadata\": {
        \"name\": \"Chixodo.xyz\"
    }
}"
```
