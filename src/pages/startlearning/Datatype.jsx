export default function Datatype(){
    return(
        <div className="page-content">
            <h1>ชนิดข้อมูลของภาษา Python</h1>
            <hr/>
            <h2>ประเภทข้อมูลในตัว</h2>
            <h3>Python มีประเภทข้อมูลต่อไปนี้ในตัวตามค่าเริ่มต้นในหมวดหมู่เหล่านี้:</h3>
            <p>- ประเภทข้อความ : <span className="operator-symbol">str</span></p>
            <p>- ประเภทตัวเลข :	<span className="operator-symbol">int</span>(ตัวเลขจำนวนเต็ม), <span className="operator-symbol">float</span>(ตัวเลขทศนิยม), <span className="operator-symbol">complex</span> เช่น : 5+4i</p>
            <p>- ประเภทลำดับ : <span className="operator-symbol">list</span>, <span className="operator-symbol">tuple</span>, <span className="operator-symbol">range</span></p>
            <p>- ประเภท mapping :	<span className="operator-symbol">dict</span></p>
            <p>- ประเภทตรรกศาสตร์ : <span className="operator-symbol">bool</span> (จะมีค่า True กับ False)</p>
            <p>- ไม่มี ประเภท :	<span className="operator-symbol">NoneType</span></p>
            
            <hr/>
            <h2>อ่าน ประเภทข้อมูลโดย ฟังก์ชัน <span className="operator-symbol">type()</span></h2>
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
                }} >        
                <span style={{color: '#e5eaeeff'}}>x =</span><span style={{color: '#7a4b4bff'}}> 10</span>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>type<span style={{color: '#e5eaeeff'}}>(x)</span></span>)
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
{`<class 'int'>`}
            </div>
        </div>
    )
}
