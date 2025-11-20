import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero">
      <div class="profile-image">
        <div class="image-placeholder">👤</div>
      </div>
      <h1 class="name">홍길동</h1>
      <p class="title">프론트엔드 개발자</p>
      <div class="social-links">
        <a href="#" class="social-link">GitHub</a>
        <a href="#" class="social-link">LinkedIn</a>
        <a href="#" class="social-link">Email</a>
      </div>
    </header>

    <section class="about-section">
      <h2 class="section-title">자기소개</h2>
      <div class="about-card">
        <p class="about-text">
          안녕하세요! 열정적인 개발자입니다. 사용자 경험을 중시하며 
          아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
          새로운 기술을 배우고 도전하는 것을 즐기며, 
          팀과 함께 성장하는 것을 중요하게 생각합니다.
        </p>
      </div>
    </section>

    <section class="experience-section">
      <h2 class="section-title">활동 경력</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">시니어 프론트엔드 개발자</h3>
            <p class="timeline-company">테크 스타트업</p>
            <p class="timeline-date">2022.01 - 현재</p>
            <p class="timeline-description">
              React와 TypeScript를 활용한 대규모 웹 애플리케이션 개발 및 유지보수
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">프론트엔드 개발자</h3>
            <p class="timeline-company">IT 기업</p>
            <p class="timeline-date">2020.03 - 2021.12</p>
            <p class="timeline-description">
              Vue.js를 사용한 사용자 인터페이스 개발 및 성능 최적화
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">주니어 개발자</h3>
            <p class="timeline-company">소프트웨어 회사</p>
            <p class="timeline-date">2018.06 - 2020.02</p>
            <p class="timeline-description">
              웹 개발 기초를 배우고 다양한 프로젝트에 참여하며 실무 경험 축적
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="section-title">기술 스택</h2>
      <div class="skills-grid">
        <div class="skill-tag">JavaScript</div>
        <div class="skill-tag">TypeScript</div>
        <div class="skill-tag">React</div>
        <div class="skill-tag">Vue.js</div>
        <div class="skill-tag">Node.js</div>
        <div class="skill-tag">CSS3</div>
        <div class="skill-tag">HTML5</div>
        <div class="skill-tag">Git</div>
      </div>
    </section>
  </div>
`
