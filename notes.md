# Auth

- Authentication: who is the client? about identity.
- Authorization: what can you do? about access.

Hashing is one way

pass -> (hashing function + time) -> hash (string)

hashes

- id
- password
- alg
- rounds
- hash

`select * from hashes where hash = thisHashIStoleFromThatDatabase`

string > (hash it) => hash > (hash it) => another hash > (hash it) => hash ... 2 to the nth

given a 3 this happens 8 times.
