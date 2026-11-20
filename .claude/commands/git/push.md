# Push 작업

아래 순서대로 `origin`의 `main` 브랜치에 push해 줘.

## 1. 커밋하지 않은 변경사항 확인

- push 전에 커밋하지 않은 변경사항이 있는지 확인한다.
- 변경사항이 있으면 push하지 말고, 목록을 알려준 뒤 진행 여부를 물어본다.

## 2. push

- upstream이 설정되어 있지 않으면 `-u` 옵션을 붙여 push한다.
  - `git push -u origin main`
- upstream이 이미 설정되어 있으면 그대로 push한다.
  - `git push origin main`