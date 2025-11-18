export default function Match(){
    const price = "{price}";
    return(
        <div className="page-content">
            <h1>Match Statement ใน Python</h1>
            <hr/>
            <h2>Match Statement คืออะไร?</h2>
            <p><span className="operator-symbol">Match Statement</span> เป็นฟีเจอร์ใหม่ใน <span className="operator-symbol">Python 3.10+</span> ที่เรียกว่า <span className="operator-symbol">Structural Pattern Matching</span> คล้ายกับ <span className="operator-symbol">switch-case</span> ในภาษาอื่นๆ แต่มีความสามารถมากกว่า</p>
            <hr/>
            <h3>รูปแบบพื้นฐาน : </h3>
        <div className="sizecode" style={{
            backgroundColor: '#1e1e1ed8',
            color: '#d4d4d4',
            padding: '16px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            lineHeight: '1.5',
            textAlign:"start",
            }}>
            <span style={{color: '#569CD6'}}>match </span><span style={{color: '#e5eaeeff'}}>ตัวแปร</span> :
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>ค่าที่1 :</span>
            {"\n"}     <span style={{color: '#7cad5aff'}}># โค้ดที่จะทำงาน</span>
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>ค่าที่2 :</span>
            {"\n"}     <span style={{color: '#7cad5aff'}}># โค้ดที่จะทำงาน</span>
            {"\n"}  <span style={{color: '#569CD6'}}>case _ </span>: <span style={{color: '#7cad5aff'}}> #  default case</span>
            {"\n"}     <span style={{color: '#7cad5aff'}}># โค้ดที่จะทำงานเมื่อไม่ตรงกับกรณีใดๆ</span>
        </div>
        <hr/>
        <h2>ตัวอย่างการใช้งาน</h2>
        <h3>เช่น :</h3>
        <div className="sizecode" style={{
            backgroundColor: '#1e1e1ed8',
            color: '#d4d4d4',
            padding: '16px',
            borderRadius: '8px',
            fontFamily: 'monospace',
            whiteSpace: 'pre',
            lineHeight: '1.5',
            textAlign:"start",
            }}>
            <span style={{color: '#e5eaeeff'}}>choice =</span><span style={{color: '#569CD6'}}> input</span>(<span style={{color: '#D69D85'}}>"เลือกเมนู (1,2,3,4) : "</span>)
            <br/>
            {"\n"}<span style={{color: '#569CD6'}}>match </span><span style={{color: '#e5eaeeff'}}>choice</span> :
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>"1" :</span>
            {"\n"}     <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเลือก: ข้าวผัด"</span>)
            {"\n"}     <span style={{color: '#e5eaeeff'}}>price</span> = <span style={{color: '#7a4b4bff'}}>50</span>   
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>"2" :</span>
            {"\n"}     <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเลือก: ผัดไทย"</span>)
            {"\n"}     <span style={{color: '#e5eaeeff'}}>price</span> = <span style={{color: '#7a4b4bff'}}>60</span>
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>"3" :</span>
            {"\n"}     <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเลือก: ส้มตำ"</span>)
            {"\n"}     <span style={{color: '#e5eaeeff'}}>price</span> = <span style={{color: '#7a4b4bff'}}>40</span>
            {"\n"}  <span style={{color: '#569CD6'}}>case </span><span style={{color: '#e5eaeeff'}}>"4" :</span>
            {"\n"}     <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเลือก: ต้มยำกุ้ง"</span>)
            {"\n"}     <span style={{color: '#e5eaeeff'}}>price</span> = <span style={{color: '#7a4b4bff'}}>80</span>
            {"\n"}  <span style={{color: '#569CD6'}}>case _</span> : 
            {"\n"}     <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ไม่มีเมนูนี้"</span>)
            {"\n"}     <span style={{color: '#e5eaeeff'}}>price</span> = <span style={{color: '#569CD6'}}>None</span>
            <br/>
            {"\n"}<span style={{color: '#7cad5aff'}}># ตรวจสอบก่อนใช้งาน</span>
            {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> price</span> <span style={{color: '#569CD6'}}>is not None </span>: 
            {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}><span style={{color: '#569CD6'}}>f</span>"ราคา : <span style={{color: '#e5eaeeff'}}>{price}</span> บาท "</span>)
            {"\n"}<span style={{color: '#569CD6'}}>else </span>: 
            {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ไม่สามารถคำนวณราคาได้"</span>)
        </div>
        <hr/>
        <h2>ข้อดีของ Match Statement</h2>
        <h3>- อ่านง่ายกว่า - โค้ดสะอาดและเข้าใจง่าย</h3>
        <h3>- Pattern Matching - สามารถจับรูปแบบที่ซับซ้อนได้</h3>
        <h3>- Performance - เร็วกว่า if-elif ในบางกรณี</h3>
        <h3>- Guard Conditions - ใช้ if เพิ่มเงื่อนไขได้</h3>
        <hr/>
        <h2>ข้อจำกัด</h2>
        <h3>- <span className="operator-symbol">Python 3.10+</span> - ใช้ได้เฉพาะเวอร์ชันใหม่</h3>
        <h3>- Learning Curve - ต้องเรียนรู้ syntax ใหม่</h3>
        </div>
    )
}