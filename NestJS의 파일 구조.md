# NestJS 구조 

가장 중요한 `src` 폴더

```bash
src
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```

node로는
service는 controller
controller는 routes
module은 controller와 routes를 묶어서 한 덩어리로 관리하는 것 
main.ts는 app의 느낌인 거 같다.

### 코드 흐름

**service 👉 controller 👉 module 👉 main.ts**

### 아키텍쳐

controller와 service를 module로 묶어 한 덩어리로 관리하고 module이 모여 하나의 프로젝트를 구성한다.