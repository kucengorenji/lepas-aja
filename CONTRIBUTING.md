# Contribuing to Lepas Aja

How to contribute in Lepas Aja project

#### Table Of Contents

- [Make Issue and Merge Request](#make-issue-&-merge-request)
- [How to Contribute](#how-to-contribute)
- [Code Review](#code-review)
- [Commit message](#commit-message)

## Make issue & merge request

1. buka tab issue dan klik new issue
   ![issue tab](/assets/issue_tab.png)
2. dari form issue, isi judul sesuai task card scrum, isi template sesuai task card, apakah feature, bug fix, atau lainya. isi deskripsi markdown dari template tersebut
   ![form](/assets/form.png)
3. assign user untuk yang mengerjakanya
4. klik milestone sesuai sprint scrum 1, 2, atau 3
5. klik label apakah itu frontend atau backend dan submit
6. kembali ke tab issue, kemudian klik issue yang sudah dibuat tadi.
7. user yang di assign ke issue tersebut kemudian membuat merge request.
   ![create mr](/assets/create_mr.png)
8. happy coding!

## How to Contribute

1. make sure there is an issue and already have merge request.
2. do git pull from main to get the latest update from main or just type `git pull origin main`
3. chekout to the selected branch, IF YOU COME WHEN THERE IS ALREADY CODE FROM THIS MR, ALSO DO GIT PULL FROM THE BRANCH INVOLVED. `git pull origin ${branch name}`
4. after you finish the code or already make a commit and ready to push, make sure you push the code on the right branch `git push origin ${branch name}`
5. [Code Review](#code-review)

## Code Review

1. pilih merge request yang akan direview
   ![cek mr](/assets/cekmr.png)
2. cek komentar jika ada dan issue terkait.
3. cek commit log berdasarkan issue yang ada.
4. review code perubahan, jika ada yang perlu diperbaiki berikan comment pada line yang di tuju.
   ![comment](/assets/comment.png)

## Commit Message

A typical git commit message will look like
`<type>: <subject> `

"subject" menggunkan kata imperatif (eg: use "add" instead of "added" or "adds"), don't use dot(.) at end, don't capitalize first letter

"type" adalah prefix awal yang ada dari list dibawah ini:

- `build`: Build related changes (eg: npm related/ adding external dependencies)
- `chore`: A code change that external user won't see (eg: change to .gitignore file or .prettierrc file)
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation related changes
- `refactor`: A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name)
- `perf`: A code that improves performance
- `style`: A code that is related to styling
- `test`: Adding new test or making changes to existing test
