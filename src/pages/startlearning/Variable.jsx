export default function Variable(){
    return(
        <div className="page-content">
            <h1>การสร้างตัวเเปร ใน Python</h1>
            <hr/>
            <h2>ตัวเเปร คือ?</h2>
            <h3>ตัวเเปร (variable) คือ </h3>
            <p>ชื่อที่ถูกนิยามขึ้นมา เพื่อใช้เก็บข้อมูลสำหรับการนำไปใช้งานในโปรเเกรม ข้อมูลประกอบด้วย ข้อความ,ตัวเลข,ตัวอักษร</p>
            <p>เเละสามารถนำตัวเเปรมาเเสดงผลลัพธ์จากการประมวณผลได้ครับ</p>
            <h3>*** ข้อมูลในตัวเเปรสามารถเปลี่ยนเเปลงค่าได้ ***</h3>
            <hr/>
            <h2> กฎการตั้งชื่อตัวแปร</h2>
            <h3>1. ต้องขึ้นต้นด้วย ตัวอักษร หรือ เครื่องหมายขีดล่าง _</h3>
            <h3>2. ห้ามขึ้นต้นด้วยตัวเลข</h3>
            <h3>3. ห้ามใช้อักขระพิเศษมาประกอบเป็นชื่อตัวเเปร เช่น % เเละช่องว่าง</h3>
            <h3>4. ใช้ได้เฉพาะตัวอักษร (a–z, A–Z), ตัวเลข (0–9) และ _</h3>
            <h3>5. ตัวพิมพ์เล็ก–พิมพ์ใหญ่ถือว่า ต่างกัน (name ≠ Name)</h3>
            <h3>6. ห้ามใช้ คำสงวน (keywords) ของ Python เช่น if, for, class, def</h3>
            <hr/>
            <p>ตัวอย่าง การตั้งชื่อตัวเเปร เเละการใช้งานตัวเเปร :</p>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
                }} >        
                <span style={{color: '#e5eaeeff'}}>name =</span><span style={{color: '#D69D85'}}> "Name"</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>age18 =</span><span style={{color: '#7a4b4bff'}}> 18</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>height1_70 =</span><span style={{color: '#7a4b4bff'}}> 170</span>
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ชื่อ : "<span style={{color: '#e5eaeeff'}}>,name</span></span>)
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"อายุ : "<span style={{color: '#e5eaeeff'}}>,age18</span></span>)
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ส่วนสูง : "<span style={{color: '#e5eaeeff'}}>,height1_70</span></span>)
            </div>
        </div>
    )
}