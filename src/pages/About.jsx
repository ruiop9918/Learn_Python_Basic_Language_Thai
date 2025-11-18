import "../components/About.css";
export default function About() {
  const members = [
    {
      name: "นายวิทวัส แซ่ซ้ง",
      img: "/images/9813.jpg",
      role: "email : 53149@suthi.ac.th",
      github: "https://github.com/ruiop9918",
    },
    {
      name: "นายณรงค์ฤทธิ์ แซ่ซ้ง",
      img: "/images/9929.jpg",
      role: "email : 53140@suthi.ac.th",
      email: "somchai@example.com",
    },
    {
      name: "นายประจักษ์ ไทธานี",
      img: "/images/10883.jpg",
      role: "email : 51361@suthi.ac.th",
      email: "kamon@example.com",
    },
    {
      name: "นายธนภณ บำเพ็ญ",
      img: "/images/10882.jpg",
      role: "email : 51307@suthi.ac.th",
    },
  ];

  return (
    <div className="page-about">
      <h1 className="about-title">วัตถุประสงค์</h1>
      <p className="about-desc">
        เว็บไซต์นี้สร้างเพื่อการเรียนรู้ฟรีที่ทุกคนสามารถเข้าถึงได้ 
        เพื่อพัฒนาทักษะการเขียนโปรแกรมภาษา Python พื้นฐาน 
        และต่อยอดสู่ระดับที่สูงขึ้นในอนาคต โดยมุ่งหวังให้ผู้เรียนได้ทั้งความรู้ 
        ความเข้าใจ และมีแรงบันดาลใจในการพัฒนาโปรแกรมด้วยตนเอง
      </p>
      
      <h1 className="about-title" style={{ marginTop: "10px" }}>ทีมผู้จัดทำ</h1>
      <br/>
      <br/>
      <br/>
      <div className="member-container">
        {members.map((m, index) => (
          <div key={index} className="member-card">
            <div className="member-img-box">
              <img src={m.img}  className="member-img" />
            </div>
            <h3 className="member-name">{m.name}</h3>
            <h3 className="role"> {m.role}</h3>
            <div className="member-icons">
                {m.github && (
                  <a href={m.github} title="GitHub" target="_blank" className="icon github">
                    <i className="fa-brands fa-github fa-lg"></i>
                  </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
