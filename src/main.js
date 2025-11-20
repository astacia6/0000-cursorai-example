import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header class="hero">
      <div class="profile-image">
        <div class="image-placeholder">👤</div>
      </div>
      <h1 class="name">한솔</h1>
      <p class="title">정보 교사</p>
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
          안녕하세요! 정보 교사 한솔입니다. AI와 파이썬을 활용한 교육과 
          데이터 분석에 관심이 많으며, 교재 집필과 강의를 통해 
          교육 현장에 실용적인 도구와 지식을 전달하고 있습니다.
          생성형 AI와 노코드 도구를 활용한 업무 자동화에도 깊은 관심을 가지고 있습니다.
        </p>
      </div>
    </section>

    <section class="experience-section">
      <h2 class="section-title">주요 이력</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">디지털튜터 양성 교재 집필 및 강의</h3>
            <p class="timeline-company">2024</p>
            <p class="timeline-date">2024</p>
            <p class="timeline-description">
              디지털튜터 양성을 위한 교재 집필 및 강의를 진행했습니다.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">앱시트 자율연수 강사</h3>
            <p class="timeline-company">서울특별시교육청교육연구정보원</p>
            <p class="timeline-date">2024</p>
            <p class="timeline-description">
              서울특별시교육청교육연구정보원에서 앱시트 자율연수 강사로 활동했습니다.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">vpython 융합교육 강사</h3>
            <p class="timeline-company">서울특별시교육청교육연구정보원</p>
            <p class="timeline-date">2024</p>
            <p class="timeline-description">
              서울특별시교육청교육연구정보원에서 vpython 융합교육 강사로 활동했습니다.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">데이터 분석 with 파이썬 강의</h3>
            <p class="timeline-company">이솦(ESOF)</p>
            <p class="timeline-date">2023</p>
            <p class="timeline-description">
              이솦(ESOF)에서 데이터 분석 with 파이썬 강의를 진행했습니다.
            </p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">데이터 분석 특강 강사</h3>
            <p class="timeline-company">경찰청</p>
            <p class="timeline-date">2023</p>
            <p class="timeline-description">
              경찰청에서 데이터 분석 특강 강사로 활동했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <h2 class="section-title">저서</h2>
      <div class="books-grid">
        <div class="book-card">
          <h3 class="book-title">찐 실전 챗GPT 생성형 AI 수업 업무 대혁명</h3>
          <p class="book-publisher">광문각출판미디어</p>
        </div>
        <div class="book-card">
          <h3 class="book-title">선생님을 위한 8282 업무 자동화 with AI+파이썬+노코드</h3>
          <p class="book-publisher">골든래빗</p>
        </div>
      </div>
    </section>
  </div>
`
