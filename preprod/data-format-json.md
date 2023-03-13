# Format des donnees

## Tables

### Users

- username (string)
- email (string)
- password (string)
- password_verify (string)

### Profils

- id (int)
- nom (string)
- prenom (string)

### Videos

- id (int)
- title (string)
- description (string)
- url (string)

### Comments

- id (int)
- content (string)

### UsersVideos

- id (int)
- userId (int)
- videoId (int)

### UsersComments

- id (int)
- userId (int)
- commentId (int)
