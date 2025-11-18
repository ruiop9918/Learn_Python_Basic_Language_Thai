export default function Casting(){
    return(
        <div className="page-content">
            <h1>การแปลงชนิดข้อมูล (Casting) ใน Python</h1>
            <hr/>
            <h2>Casting คืออะไร?</h2>
            <p>Casting คือการแปลงข้อมูลจากชนิดหนึ่งไปเป็นอีกชนิดหนึ่ง เช่น จาก string เป็น integer หรือจาก integer เป็น float</p>
            <hr/>
            <h2>ฟังก์ชันสำหรับ Casting</h2>
            <h3>1. <span className="operator-symbol">int()</span> - แปลงเป็นจำนวนเต็ม :</h3>
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
                <span style={{color: '#7cad5aff'}}># จาก string เป็น int</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>age =<span style={{color: '#569CD6'}}>  int</span></span><span style={{color: '#D69D85'}}>("50")</span><span style={{color: '#7cad5aff'}}>   # ได้ 25</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>score =<span style={{color: '#569CD6'}}>  int</span></span><span style={{color: '#D69D85'}}>("100")</span><span style={{color: '#7cad5aff'}}>   # ได้ 100</span>
                <br/>
                {"\n"}<span style={{color: '#7cad5aff'}}># จาก float เป็น int (ตัดทศนิยมทิ้ง)</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>price =<span style={{color: '#569CD6'}}>  int</span></span>(<span style={{color: '#7a4b4bff'}}>99.99</span>)<span style={{color: '#7cad5aff'}}>   # ได้ 99</span>
            </div>
            <br/>
            <h3>2. <span className="operator-symbol">float()</span> - แปลงเป็นจำนวนทศนิยม :</h3>
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
                <span style={{color: '#7cad5aff'}}># จาก string เป็น float</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>height =<span style={{color: '#569CD6'}}>  float</span></span><span style={{color: '#D69D85'}}>("169.5")</span><span style={{color: '#7cad5aff'}}>   # ได้ 169.5</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>weight =<span style={{color: '#569CD6'}}>  float</span></span><span style={{color: '#D69D85'}}>("50")</span><span style={{color: '#7cad5aff'}}>   # ได้ 50.0</span>
                <br/>
                {"\n"}<span style={{color: '#7cad5aff'}}># จาก int เป็น float</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>number =<span style={{color: '#569CD6'}}>  float</span></span>(<span style={{color: '#7a4b4bff'}}>10</span>)<span style={{color: '#7cad5aff'}}>   # ได้ 10.0</span>
            </div>
            <br/>
            <h3>3. <span className="operator-symbol">str()</span> - แปลงเป็นข้อความ :</h3>
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
                <span style={{color: '#7cad5aff'}}># จาก int เป็น string</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>age =<span style={{color: '#569CD6'}}>  str</span></span>(<span style={{color: '#7a4b4bff'}}>20</span>)<span style={{color: '#7cad5aff'}}>   # ได้ "20"</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>count =<span style={{color: '#569CD6'}}>  str</span></span>(<span style={{color: '#7a4b4bff'}}>100</span>)<span style={{color: '#7cad5aff'}}>   # ได้ "100"</span>
                <br/>
                {"\n"}<span style={{color: '#7cad5aff'}}># จาก float เป็น string</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>number =<span style={{color: '#569CD6'}}>  str</span></span>(<span style={{color: '#7a4b4bff'}}>30.55</span>)<span style={{color: '#7cad5aff'}}>   # ได้ "30.55"</span>
            </div>
            <hr/>
            <h2>ตัวอย่างการใช้งานจริง</h2>
            <h3>รับข้อมูลจากผู้ใช้และคำนวณ :</h3>
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
                <span style={{color: '#7cad5aff'}}># รับอายุและคำนวณปีเกิด</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>age =<span style={{color: '#569CD6'}}>  int</span>(<span style={{color: '#569CD6'}}>input</span></span><span style={{color: '#D69D85'}}>("ป้อนอายุของคุณ: ")</span>)
                {"\n"}<span style={{color: '#e5eaeeff'}}>birth_year =<span style={{color: '#7a4b4bff'}}> 2025</span> - </span><span style={{color: '#e5eaeeff'}}>age</span>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเกิดปี ค.ศ. : "<span style={{color: '#e5eaeeff'}}>, birth_year</span></span>)
            </div>
            <br/>
            <h3>แปลงเพื่อแสดงผล :</h3>
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
                <span style={{color: '#e5eaeeff'}} >score =<span style={{color: '#7a4b4bff'}}>  95</span></span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>percentage =<span style={{color: '#7a4b4bff'}}> 87.5</span></span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>result=<span style={{color: '#D69D85'}}> "คะเเนน :"</span>+</span><span style={{color: '#569CD6'}}>str</span>(<span style={{color: '#e5eaeeff'}}>score</span>)+<span style={{color: '#D69D85'}}>"("+<span style={{color: '#569CD6'}}>str</span><span style={{color: '#e5eaeeff'}}>(percentage)</span>+"<span style={{color: '#e5eaeeff'}}>%</span>)"</span>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#e5eaeeff'}}>result</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`คะเเนนของคุณ : 95 (87.5%)`}
            </div>
        
            <br/>
            <h3>การตรวจสอบก่อนแปลง :</h3>
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
                <span style={{color: '#e5eaeeff'}}>user_input = (<span style={{color: '#569CD6'}}>input</span></span><span style={{color: '#D69D85'}}>("ป้อนตัวเลข : ")</span>)
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}>  user_input.<span style={{color: '#569CD6'}}>isdigit()</span> :</span>
                {"\n"}  <span style={{color: '#e5eaeeff'}}>number = <span style={{color: '#569CD6'}}>int</span></span><span style={{color: '#e5eaeeff'}}>(user_input)</span>
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ตัวเลขที่คุณป้อน : "<span style={{color: '#e5eaeeff'}}>, number</span></span>)
                {"\n"}<span style={{color: '#569CD6'}}>else:</span>
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"กรุณาใส่ตัวเลขเท่านั้น"</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`ป้อนตัวเลข : 20
ตัวเลขที่คุณป้อน : 20
ป้อนตัวเลข : Hello
กรุณาใส่ตัวเลขเท่านั้น`}
            </div>
            <hr/>
            <h2>ข้อควรระวัง</h2>
            <h3>Error เมื่อแปลงไม่ได้ :</h3>
            <div className="sizecode" style={{
                backgroundColor: '#491313ff',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
            <span style={{color: '#7cad5aff'}}># จะเกิด Error</span>
            {"\n"}<span style={{color: '#569CD6'}}>int</span>(<span style={{color: '#D69D85'}}>"Hello"</span>)<span style={{color: '#7cad5aff'}}>   # ValueError</span>
            {"\n"}<span style={{color: '#569CD6'}}>int</span>(<span style={{color: '#D69D85'}}>12.5</span>)<span style={{color: '#7cad5aff'}}>    # ValueError (ต้องใช้ float() ก่อน)</span>
            </div>
          
            <hr/>
            <h3>เเละ ระวัง Error เมื่อแปลงข้อมูลที่ไม่เหมาะสม</h3>
        </div>
    )
}