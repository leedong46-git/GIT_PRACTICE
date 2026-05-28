# Git 연습 프로젝트

Git 기본 명령어를 연습하기 위한 프로젝트입니다.

## 폴더 구조
```
git-practice/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
```

## 연습 순서

### 1. 초기 설정
```bash
git init
git add .
git commit -m "첫 번째 커밋"
```

### 2. GitHub에 올리기
```bash
git remote add origin https://github.com/유저명/git-practice.git
git push -u origin main
```

### 3. 파일 수정 후 다시 올리기
index.html이나 style.css를 수정하고:
```bash
git add .
git commit -m "스타일 수정"
git push
```

### 4. 브랜치 연습
```bash
git checkout -b feature/new-color   # 새 브랜치 만들기
# css/style.css에서 색상 바꿔보기
git add .
git commit -m "색상 변경"
git checkout main                   # 메인으로 돌아오기
git merge feature/new-color         # 합치기
```

### 5. 되돌리기
```bash
git log --oneline          # 커밋 목록 보기
git checkout -- index.html # 파일 변경 취소
git revert HEAD            # 마지막 커밋 되돌리기
```
