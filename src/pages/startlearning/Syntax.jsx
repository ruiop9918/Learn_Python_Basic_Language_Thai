
export default function Syntax() {
  return (
    <div className="page-content">
      <h1>ไวยากรณ์ Python</h1>
      <hr/>
      <h2>การย่อหน้า (Indentation) ของ Python</h2>
      <p>ใน Python การย่อหน้า เป็นสิ่งสำคัญมาก เพราะใช้กำหนด ขอบเขตของบล็อกคำสั่ง แทนการใช้ {} แบบในภาษาอื่น เช่น C, Java, หรือ JavaScript</p>
      <p>ตัวอย่างเช่น:</p>
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
            <span style={{color: '#569CD6'}}>if</span> True:
            {"\n"}    <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"บล็อกนี้ย่อหน้า"</span>)
            {"\n"}    <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ยังอยู่ใน if"</span>)
            {"\n"}
            {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"อยู่นอก if"</span>)
        </div>

      <h3>หลักการสำคัญ:</h3>
      <p>- ใช้ space หรือ tab แต่ต้อง เลือกอย่างใดอย่างหนึ่งให้สอดคล้องกันในบล็อกเดียวกัน</p>
      <p>- มาตรฐาน PEP8 แนะนำใช้ 4 ช่องว่างต่อระดับย่อหน้า</p>
      <p>- หากย่อหน้าไม่ตรง Python จะเกิด IndentationError</p>
      <h3>ตัวอย่างผิด:</h3>
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
            <span style={{color: '#569CD6'}}>if</span> True:
            {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ผิดเพราะไม่มีการย่อหน้า"</span>)  
        </div>
      <hr/>
      <h2>เรื่องการใส่ <span className="operator-symbol">;</span> ใน Python</h2>
      <p>- ใน Python ไม่จำเป็นต้องใช้ ; เพื่อจบคำสั่งแบบภาษาอื่น</p>
      <p>- แต่สามารถใช้ ; เพื่อเขียนหลายคำสั่งในบรรทัดเดียว ได้</p>
      <p>ตัวอย่าง:</p>
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
            <span style={{color: '#7cad5aff'}}># เขียนคำสั่งแยกบรรทัดตามปกติ</span>
            {"\n"}<span style={{color: '#e5eaeeff'}}>x = </span> <span style={{color: '#7a4b4bff'}}> 5</span>
            {"\n"}<span style={{color: '#e5eaeeff'}}>y = </span> <span style={{color: '#7a4b4bff'}}> 10</span>
            {"\n"}<span style={{color: '#569CD6'}}>print</span>(x+y)
            <br/>
            {"\n"}<span style={{color: '#7cad5aff'}}># เขียนคำสั่งบรรทัดเดียว</span>
            {"\n"}<span style={{color: '#e5eaeeff'}}>x = 5; y = 10;</span><span style={{color: '#569CD6'}}>print</span>(x+y)
        </div>
        <h3>ข้อแนะนำ:</h3>
        <p>- ควรหลีกเลี่ยงการใช้ ; เพื่อความอ่านง่ายของโค้ด</p>
        <p>- Python สไตล์มาตรฐานเน้น คำสั่งละบรรทัด</p>
    </div>
  );
}
