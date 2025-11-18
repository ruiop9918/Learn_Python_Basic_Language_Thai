export default function Module() {
    const name = "{name}";
    return (
        <div className="page-content">
            <h1>การสร้างและใช้งาน Module ใน Python</h1>
            <hr />

            <h2>การสร้างโมดูล (Module)</h2>
            <p>
                โมดูลคือไฟล์ Python (.py) ที่เก็บฟังก์ชัน, ตัวแปร, หรือคลาส เพื่อเรียกใช้งานซ้ำได้
            </p>
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
<span style={{color:'#7cad5aff'}}># สร้างไฟล์ชื่อ mymodule.py</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> greet(name):
{"\n"}    <span style={{color:'#569CD6'}}>return f</span><span style={{color:'#D69D85'}}>"สวัสดี</span> {name}<span style={{color:'#D69D85'}}>!"</span>
{"\n"}
{"\n"}PI = <span style={{color:'#7a4b4bff'}}>3.14159</span>
            </div>

            <hr />
            <h2>การเรียกใช้งานโมดูล</h2>
            <p>สามารถใช้คำสั่ง <span className="operator-symbol">import</span> หรือ <span className="operator-symbol">from ... import</span> เพื่อเรียกใช้ฟังก์ชันและตัวแปรจากโมดูล</p>

            <h3>1. import โมดูลทั้งไฟล์</h3>
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
<span style={{color:'#7cad5aff'}}># import ทั้งโมดูล</span>
{"\n"}<span style={{color:'#569CD6'}}>import</span> mymodule
{"\n"}<span style={{color:'#569CD6'}}>print</span>(mymodule.greet(<span style={{color:'#D69D85'}}>"name"</span>))
{"\n"}<span style={{color:'#569CD6'}}>print</span>(mymodule.PI)
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
                textAlign:"start",
            }}>
{`สวัสดี name!
3.14159`}
            </div>

            <h3>2. from ... import</h3>
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
<span style={{color:'#7cad5aff'}}># import ฟังก์ชันหรือค่าที่ต้องการ</span>
{"\n"}<span style={{color:'#569CD6'}}>from</span> mymodule <span style={{color:'#569CD6'}}>import</span> greet, PI
{"\n"}<span style={{color:'#569CD6'}}>print</span>(greet(<span style={{color:'#D69D85'}}>"name"</span>))
{"\n"}<span style={{color:'#569CD6'}}>print</span>(PI)
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
                textAlign:"start",
            }}>
{`สวัสดี name!
3.14159`}
            </div>

            <h3>3. import โมดูลพร้อมตั้งชื่อย่อ</h3>
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
<span style={{color:'#7cad5aff'}}># ตั้งชื่อย่อให้โมดูล</span>
{"\n"}<span style={{color:'#569CD6'}}>import</span> mymodule <span style={{color:'#569CD6'}}>as</span> mm
{"\n"}<span style={{color:'#569CD6'}}>print</span>(mm.greet(<span style={{color:'#D69D85'}}>"name"</span>))
{"\n"}<span style={{color:'#569CD6'}}>print</span>(mm.PI)
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
                textAlign:"start",
            }}>
{`สวัสดี name!
3.14159`}
            </div>

            <hr />
            <h2>สรุปคำสั่งสำคัญ</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำสั่ง</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>import module_name</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เรียกใช้งานโมดูลทั้งหมด</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>from module_name import name1, name2</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เรียกใช้งานเฉพาะฟังก์ชัน, ตัวแปร หรือคลาส</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>import module_name as alias</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตั้งชื่อย่อให้โมดูลเพื่อเรียกใช้งานสะดวก</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
