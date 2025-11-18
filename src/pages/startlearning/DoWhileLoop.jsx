export default function DoWhileLoop() {
    return (
        <div className="page-content">
            <h1>Do While Loop ใน Python</h1>
            <hr />

            <h2>Do While คืออะไร?</h2>
            <p>
                ในภาษา Python ไม่มีคำสั่ง <span className="operator-symbol">do...while</span> โดยตรง
                แต่เราสามารถจำลองพฤติกรรมของมันได้ด้วยการใช้{" "}
                <span className="operator-symbol">while True</span> และ{" "}
                <span className="operator-symbol">break</span> เพื่อให้{" "}
                <span className="operator-symbol">ทำงานอย่างน้อยหนึ่งครั้งก่อนตรวจสอบเงื่อนไข</span>
            </p>

            <hr />
            <h3>รูปแบบจำลองของ Do While Loop :</h3>
            <pre className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
<span style={{color: '#569CD6'}}>while True</span>:
{'\n'}<span style={{color: '#7cad5aff'}}># คำสั่งที่จะทำงานอย่างน้อย 1 ครั้ง</span>
{'\n'}    ...
{'\n'}  <span style={{color: '#569CD6'}}>if</span> เงื่อนไข:
{'\n'}      <span style={{color: '#569CD6'}}>break</span>
            </pre>

            <hr />
            <h2>ตัวอย่างการใช้งาน</h2>
            <h3>1. จำลอง Do While เพื่อรับค่าจากผู้ใช้</h3>
            <pre className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
<span style={{color: '#569CD6'}}>while True</span>:
{'\n'}  num = <span style={{color: '#569CD6'}}>int</span>(<span style={{color: '#569CD6'}}>input</span>(<span style={{color: '#D69D85'}}>"กรอกตัวเลข (0 เพื่อออก): "</span>))
{'\n'}  <span style={{color: '#569CD6'}}>if</span> num == <span style={{color: '#7a4b4bff'}}>0</span>:
{'\n'}      <span style={{color: '#569CD6'}}>break</span>
{'\n'}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณกรอกค่า:"</span>, num)
            </pre>

            <p>ผลลัพธ์ (ตัวอย่าง):</p>
            <pre className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
{`กรอกตัวเลข (0 เพื่อออก): 5
คุณกรอกค่า: 5
กรอกตัวเลข (0 เพื่อออก): 2
คุณกรอกค่า: 2
กรอกตัวเลข (0 เพื่อออก): 0`}
            </pre>

            <hr />
            <h3>2. จำลอง Do While สำหรับการตรวจสอบรหัสผ่าน</h3>
            <pre className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
               lineHeight: '1.5',
                textAlign:"start",
                
            }}>
<span style={{color: '#e5eaeeff'}}>correct_password =</span><span style={{color: '#D69D85'}}> "1234"</span>
{'\n'}<span style={{color: '#569CD6'}}>while True</span>:
{'\n'}  pwd = <span style={{color: '#569CD6'}}>input</span>(<span style={{color: '#D69D85'}}>"กรอกรหัสผ่าน: "</span>)
{'\n'}  <span style={{color: '#569CD6'}}>if</span> pwd == correct_password:
{'\n'}      <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เข้าสู่ระบบสำเร็จ!"</span>)
{'\n'}      <span style={{color: '#569CD6'}}>break</span>
{'\n'}  <span style={{color: '#569CD6'}}>else</span>:
{'\n'}      <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"รหัสผิด กรุณาลองใหม่"</span>)
</pre>

            <p>ผลลัพธ์ (ตัวอย่าง):</p>
            <pre className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
{`กรอกรหัสผ่าน: 5555
รหัสผิด กรุณาลองใหม่
กรอกรหัสผ่าน: 1234
เข้าสู่ระบบสำเร็จ!`}
            </pre>

            <hr />
            <h2>หลักการของ Do While ใน Python</h2>
            <ul>
                <p>- ใช้ <span className="operator-symbol">while True</span> เพื่อให้โค้ดทำงานก่อน</p>
                <p>- ใช้ <span className="operator-symbol">if not เงื่อนไข:</span> เพื่อหยุดลูปเมื่อไม่ตรงตามเงื่อนไข</p>
                <p>- ภายในลูปต้องมี <span className="operator-symbol">break</span> เสมอ มิฉะนั้นจะวนไม่สิ้นสุด</p>
            </ul>

            <hr />
            <h2>สรุปเปรียบเทียบ While และ Do While</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>หัวข้อ</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>While Loop</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>Do While </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตรวจสอบเงื่อนไขก่อน</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>✅ ใช่</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>❌ ไม่ใช่ (ทำก่อนตรวจ)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ทำงานอย่างน้อย 1 ครั้ง</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>❌ ไม่จำเป็น</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>✅ ใช่</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้คำสั่ง break</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ไม่จำเป็น</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>จำเป็นต้องมี</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>รูปแบบคำสั่ง</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>while เงื่อนไข:</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>while True: ... if not เงื่อนไข: break</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
