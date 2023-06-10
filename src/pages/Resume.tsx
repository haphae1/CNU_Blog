const Resume = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <div style={{ backgroundColor: '#f8f8f8', padding: '20px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>실전코딩 수강</h1>
        <p style={{ fontSize: '16px', marginBottom: '5px' }}>2023.03 ~ 2023.06</p>
        <p style={{ fontSize: '16px' }}>Git, React, SpringBoot 등 다양한 실무 관련 지식 수강</p>
      </div>
      <hr style={{ border: 'none', borderBottom: '1px solid #ddd', margin: '30px 0' }} />
      <div style={{ backgroundColor: '#f8f8f8', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>일본 여행 예정</h1>
        <p style={{ fontSize: '16px', marginBottom: '5px' }}>2023.07.10 ~ 2023.07.14</p>
        <p style={{ fontSize: '16px' }}>5번째 일본 여행, 아직 계획도 안짬 친구들이랑 4명이서 4박 5일 놀다올 예정임</p>
      </div>
    </div>
  );
};

export default Resume;
