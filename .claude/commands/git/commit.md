# Commit 작업

아래 순서대로 commit 작업을 진행해 줘.

## 1. .gitignore 생성

- `.gitignore` 파일이 이미 있으면 이 단계는 건너뛴다.
- 다음 항목을 포함해 생성한다.
  - VS Code 설정 파일
  - macOS 시스템 파일
  - Windows 시스템 파일
  - `.env` 등 일반적인 환경변수 파일

## 2. remote 연결

- `origin`이 이미 연결되어 있으면 이 단계는 건너뛴다.
- remote 이름: `origin`
- 주소: https://github.com/fdsa0317/a_commands.git

## 3. commit

- 아래 prefix 규칙 중 적절한 것을 사용해 commit 메시지를 작성한다.
- commit 메시지 내용: $ARGUMENTS

### commit prefix 규칙

| prefix | 용도 |
|---|---|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 (README 등) |
| `style` | 코드 포맷 변경 (세미콜론, 공백 등) |
| `refactor` | 리팩토링 (기능 변화 없음) |
| `test` | 테스트 코드 추가/수정 |
| `chore` | 빌드, 설정, 패키지, 기타 작업 |
| `perf` | 성능 개선 |
| `ci` | CI 설정 수정 |
| `build` | 빌드 시스템 수정 |
| `revert` | 커밋 되돌리기 |