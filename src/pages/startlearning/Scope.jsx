export default function Scope() {
    return (
        <div className="page-content">
            <h1>Scope ของตัวแปรใน Python</h1>
            <hr />

            <p>
                <span className="operator-symbol">Scope</span> คือ ขอบเขตของตัวแปรว่าตัวแปรนั้นสามารถเข้าถึงได้จากที่ใดบ้าง
                Python มี 4 ประเภท scope หลัก: <code>Local</code>, <code>Enclosing</code>, <code>Global</code>, <code>Built-in</code> (LEGB)
            </p>

            <h2>Local Scope</h2>
            <p>ตัวแปรที่ประกาศภายในฟังก์ชัน สามารถเข้าถึงได้แค่ภายในฟังก์ชันนั้น</p>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
<span style={{color:'#7cad5aff'}}># ตัวแปรภายในฟังก์ชัน</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> my_func():
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>10</span>
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(x)
{"\n"}
{"\n"}my_func()
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                  lineHeight: '1.5',
                textAlign: "start",
            }}>
{`10`}
            </div>

            <hr />
            <h2>Enclosing Scope (Nonlocal)</h2>
            <p>ตัวแปรในฟังก์ชันซ้อน (nested function) สามารถเข้าถึงตัวแปรในฟังก์ชันรอบนอกได้</p>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
<span style={{color:'#7cad5aff'}}># ตัวอย่าง nested function</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> outer():
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>5</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> inner():
{"\n"}        <span style={{color:'#569CD6'}}>nonlocal</span> x
{"\n"}        x += <span style={{color:'#7a4b4bff'}}>1</span>
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(x)
{"\n"}    inner()
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(x)
{"\n"}
{"\n"}outer()
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
{`6
6`}
            </div>

            <hr />
            <h2>Global Scope</h2>
            <p>ตัวแปรประกาศนอกฟังก์ชัน สามารถเข้าถึงได้ทุกที่</p>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
<span style={{color:'#7cad5aff'}}># ตัวแปร global</span>
{"\n"}x = <span style={{color:'#7a4b4bff'}}>100</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> show():
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(x)
{"\n"}
{"\n"}show()
{"\n"}<span style={{color:'#569CD6'}}>print</span>(x)
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
{`100
100`}
            </div>

            <hr />
            <h2>Built-in Scope</h2>
            <p>ตัวแปรหรือฟังก์ชันที่ Python เตรียมไว้แล้ว เช่น <code>len()</code>, <code>print()</code>, <code>int()</code></p>

            <hr />
            <h2>สรุปตาราง Scope (LEGB)</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>Scope</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Local</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวแปรภายในฟังก์ชัน</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>x = 10 (ใน def)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Enclosing</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวแปรในฟังก์ชันรอบนอก</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>nonlocal x</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Global</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวแปรนอกฟังก์ชัน</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>global x</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Built-in</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวแปรและฟังก์ชันที่ Python เตรียมไว้</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>len(), print(), int()</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
