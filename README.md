# BOOLER

## 불러만 주세요.

---

Week2 1분반 박정민 정해준 팀

- KAKAO SDK를 이용한 카카오 로그인이 가능합니다.

---

### a. 개발 팀원

- 이창우 - KAIST 21학번 박정민
- 박병찬 - UNIST 18학번 정해준

---

### b. 개발환경

- Language: React Native, Node.js
- Database: MySQL
- Server Deployment: AWS EC2
- OS: Android
- IDE: Android Studio, VSCode, MySQL Workbench
- Target Device: Galaxy 7

---

### c. 어플리케이션 소개

카이스트 학생들이 타슈와 같은 탈 것, 또는 

**Major features**

1. **onBoarding (온보딩 페이지)**
    
    이 앱의 필요성과 중요성을 사용자에게 명확하게 전달하기 위해 온보딩 페이지들을 구성하였습니다. 이 페이지들은 앱의 주요 기능과 목적을 설명하며, 특히 작은 일상적인 심부름부터 실행하기 어려운 작업까지 필요한 학생들에게 도움이 되는 방법을 소개하고 있습니다. 이를 통해 사용자는 앱이 어떻게 자신의 일상을 개선할 수 있는지 쉽게 이해할 수 있습니다.
    
2. **Kakao login (카카오 로그인 통합)**
    
    사용자의 편의성과 보안을 고려하여, 카카오톡 계정을 이용한 로그인 기능을 도입했습니다. 이 방식은 기존의 복잡한 회원가입 절차를 간소화하고, 기존에 카카오톡 사용자들에게는 더욱 익숙한 접근 방식을 제공할 것입니다. 또한, 카카오톡의 안정적인 보안 시스템을 활용함으로써 사용자의 개인정보 보호를 강화하고, 로그인 과정에서의 보안성을 높였습니다. 사용자는 이제 몇 번의 간단한 탭만으로 빠르고 안전하게 앱에 접속할 수 있게 되었습니다. 이러한 통합은 사용자 경험을 개선하고, 앱 사용의 편리성을 대폭 향상시키는 데 기여합니다.
    
3. **Post**
    ![image](https://github.com/madcamp-2023/w2-b/assets/105881036/a54cc59b-ffd4-4e11-99ba-3a5c211c2cf0)
![image](https://github.com/madcamp-2023/w2-b/assets/105881036/ded39e0a-ef96-4f4b-bdfc-9e12b090aaa7)
![image](https://github.com/madcamp-2023/w2-b/assets/105881036/ef220339-5de3-43e1-ae0b-4c58d100001b)

    앱의 포스트 기능은 사용자들이 심부름을 의뢰할 수 있는 게시판 기능을 제공합니다. 이 게시판은 게시물의 생성(Create), 조회(Read), 업데이트(Update), 삭제(Delete) - 즉, CRUD 기능을 완비하고 있습니다. 사용자는 게시된 심부름을 최신순, 가격이 높은 순, 마감 기한이 임박한 순으로 정렬하여 볼 수 있으며, 위치 기반 필터링도 가능합니다. 위치는 전체 또는 특정 지역(E, S, W)으로 나누어 볼 수 있습니다. 추가적으로, 지도를 통해 게시판에 올라온 심부름의 위치를 시각적으로 확인할 수 있는 기능도 포함되어 있습니다. 이를 통해 사용자는 원하는 심부름을 보다 쉽고 효율적으로 찾을 수 있으며, 위치 기반의 선택이 가능해져 편의성이 증대됩니다.
    

4. **Chat**
    ![image](https://github.com/madcamp-2023/w2-b/assets/105881036/cf065037-cbe2-48c7-880b-e84c05fb60d9)
![image](https://github.com/madcamp-2023/w2-b/assets/105881036/6f288470-edf8-455b-94a2-4c24579011d4)

    앱에서는 실제로 심부름을 진행하는 데 필요한 의사소통을 원활하게 하기 위해 대화 기능을 통합했습니다. 이 기능은 socket.io를 기반으로 한 '방' 개념을 사용하여, 각 게시판 관련된 실시간 대화를 가능하게 합니다. 이를 통해 심부름을 요청하는 사용자와 이를 수행할 사용자 간의 직접적인 커뮤니케이션이 이루어질 수 있습니다. 사용자들은 게시판에서 심부름을 선택한 후, 해당 게시물에 연결된 독립적인 대화 방에서 서로 상세한 정보를 주고받거나, 협의사항을 논의할 수 있습니다. 이 실시간 대화 기능은 심부름 수행의 효율성과 정확성을 높이고, 사용자 간의 원활한 소통을 도모함으로써 전반적인 서비스 경험을 개선합니다.
  

5.**Profile**
![image](https://github.com/madcamp-2023/w2-b/assets/105881036/f5d8c900-d258-46dd-97be-ded532939470)
![image](https://github.com/madcamp-2023/w2-b/assets/105881036/97aea7c4-1c69-417e-b88c-0510e354de79)


6. **Select Location (위치 선택 기능)**
    ![image](https://github.com/madcamp-2023/w2-b/assets/105881036/19e09151-a244-407e-bbfa-7ce1e829497f)

    사용자가 거래 장소를 사전에 선택할 수 있도록 위치 선택 창을 구현함으로써, 약속에 차질이 발생하는 상황을 방지하고, 거래 과정을 보다 원활하게 만들었다. 이 기능은 사용자에게 안정적이고 효율적인 거래 경험을 제공할 것이다.
  
    
7. **Loading (로딩 화면 최적화)**
    
    네트워크 통신 중 서버와의 연결이 이루어지는 동안 발생하는 일시적인 딜레이에 대응하여, 로딩 화면을 도입함으로써 사용자 인터페이스(UI) 및 사용자 경험(UX)을 향상시켰습니다. 이를 통해 사용자는 서버 응답을 기다리는 동안 보다 원활하고 직관적인 상호작용을 경험할 수 있습니다.
