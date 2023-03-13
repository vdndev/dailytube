# Format des donnees

## Tables

### Users

- id (int)
- username (string)
- email (string)
- password (string)
- role (int)
- profilId (int)

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
