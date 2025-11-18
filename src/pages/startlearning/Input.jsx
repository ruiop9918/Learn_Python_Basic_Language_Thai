export default function Input(){
    return(
        <div className="page-content">
            <h1> รับข้อมูลจากผู้ใช้ (input) ใน Python</h1>
            <hr/>
            <h2>input ใน Python คืออะไร?</h2>
            <p><span className="operator-symbol">input()</span> เป็นฟังก์ชันที่ใช้สำหรับรับข้อมูลจากผู้ใช้ผ่านคีย์บอร์ด โปรแกรมจะหยุดรอให้ผู้ใช้พิมพ์ข้อมูลและกด Enter</p>
            <hr/>
            <h3>รูปแบบการใช้งาน</h3>
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
                <span style={{color: '#e5eaeeff'}}>ตัวแปร =<span style={{color: '#569CD6'}}> input</span></span><span style={{color: '#D69D85'}}>("ข้อความที่ต้องการแสดง")</span>
            </div>
            <br/>
            <h3>สิ่งสำคัญที่ต้องจำ</h3>
            <p>- <span className="operator-symbol">input()</span> จะคืนค่าเป็น string เสมอ</p>
            <p>- หากต้องการตัวเลข ต้องใช้ <span className="operator-symbol">int()</span> หรือ <span className="operator-symbol">float()</span> แปลงก่อน</p>
            <p>- สามารถใส่ข้อความแสดงให้ผู้ใช้เห็นได้</p>
            <hr/>
            <h2>ตัวอย่างการใช้งาน</h2>
            <h3>การรับ <span className="operator-symbol">string</span> :</h3>
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
                <span style={{color: '#e5eaeeff'}}>name =<span style={{color: '#569CD6'}}>  input</span></span><span style={{color: '#D69D85'}}>("กรุณาใส่ชื่อของคุณ: ")</span>
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"สวัสดี : "<span style={{color: '#e5eaeeff'}}>,name</span></span>)
            </div>
            <br/>
            <h3> การรับ <span className="operator-symbol">int</span> (แปลง เเละพิมพ์เป็นตัวเลขจำนวนเต็ม) :</h3>
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
                <span style={{color: '#e5eaeeff'}}>age =<span style={{color: '#569CD6'}}>  int</span>(<span style={{color: '#569CD6'}}>input</span></span><span style={{color: '#D69D85'}}>("กรุณาใส่อายุของคุณ: ")</span>)
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณอายุ : "<span style={{color: '#e5eaeeff'}}>,age,</span></span><span style={{color: '#D69D85'}}>"ปี"</span>)
            </div>
            <br/>
            <h3>การรับ <span className="operator-symbol">float</span> (แปลง เเละพิมพ์เป็นตัวเลขทศนิยม) :</h3>
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
                <span style={{color: '#e5eaeeff'}}>height =<span style={{color: '#569CD6'}}>  float</span>(<span style={{color: '#569CD6'}}>input</span></span><span style={{color: '#D69D85'}}>("ส่วนสูงของคุณ(เมตร) : ")</span>)
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ส่วนสูงของคุณคือ : "<span style={{color: '#e5eaeeff'}}>,height,</span></span><span style={{color: '#D69D85'}}>"เมตร"</span>)
            </div>
        </div>
    )
}