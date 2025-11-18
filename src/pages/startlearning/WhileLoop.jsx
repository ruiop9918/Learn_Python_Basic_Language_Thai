export default function WhileLoop() {
    return (
        <div className="page-content">
            <h1>While Loop ใน Python</h1>
            <hr />

            <h2>While Loop คืออะไร?</h2>
            <p>
                <span className="operator-symbol">While Loop</span> ใช้สำหรับ{" "}
                <span className="operator-symbol">วนซ้ำ (loop)</span> เพื่อให้โปรแกรมทำงานซ้ำๆ{" "}
                <span className="operator-symbol">ตราบใดที่เงื่อนไขเป็นจริง (True)</span>  
                โดยจะตรวจสอบเงื่อนไขก่อนทำงานทุกครั้ง
            </p>

            <hr />
            <h3>รูปแบบพื้นฐาน :</h3>
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
<span style={{color: '#569CD6'}}>while</span> เงื่อนไข:
{"\n"}<span style={{color: '#7cad5aff'}}># คำสั่งที่ต้องการให้ทำซ้ำ</span>
            </div>

            <hr />
            <h2>ตัวอย่างการใช้งาน</h2>
            <h3>1. นับเลขด้วย while loop</h3>
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
<span style={{color: '#569CD6'}}>i =</span> <span style={{color: '#7a4b4bff'}}>1</span>
{"\n"}<span style={{color: '#569CD6'}}>while</span> i &lt;= <span style={{color: '#7a4b4bff'}}>5</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(i)
{"\n"}  i += <span style={{color: '#7a4b4bff'}}>1</span>
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
{`1
2
3
4
5`}
            </div>

            <hr />
            <h3>2. ใช้ while กับเงื่อนไข</h3>
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
<span style={{color: '#569CD6'}}>count =</span> <span style={{color: '#7a4b4bff'}}>0</span>

{"\n"}<span style={{color: '#569CD6'}}>while</span> count &lt; <span style={{color: '#7a4b4bff'}}>3</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello!"</span>)
{"\n"}  count += <span style={{color: '#7a4b4bff'}}>1</span>
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
{`Hello!
Hello!
Hello!`}
            </div>

            <hr />
            <h3>3. ใช้คำสั่ง <span className="operator-symbol">break</span> เพื่อหยุดลูป</h3>
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
<span style={{color: '#569CD6'}}>i =</span> <span style={{color: '#7a4b4bff'}}>1</span>

{"\n"}<span style={{color: '#569CD6'}}>while</span> <span style={{color: '#569CD6'}}>True</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(i)
{"\n"}  <span style={{color: '#569CD6'}}>if</span> i == <span style={{color: '#7a4b4bff'}}>5</span>:
{"\n"}      <span style={{color: '#569CD6'}}>break</span>
{"\n"}  i += <span style={{color: '#7a4b4bff'}}>1</span>
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
{`1
2
3
4
5`}
            </div>

            <hr />
            <h3>4. ใช้คำสั่ง <span className="operator-symbol">continue</span> เพื่อข้ามรอบ</h3>
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
<span style={{color: '#569CD6'}}>i =</span> <span style={{color: '#7a4b4bff'}}>0</span>
{"\n"}<span style={{color: '#569CD6'}}>while</span> i &lt; <span style={{color: '#7a4b4bff'}}>5</span>:
{"\n"}  i += <span style={{color: '#7a4b4bff'}}>1</span>
{"\n"}  <span style={{color: '#569CD6'}}>if</span> i == <span style={{color: '#7a4b4bff'}}>3</span>:
{"\n"}      <span style={{color: '#569CD6'}}>continue</span>
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(i)
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
{`1
2
4
5`}
            </div>

            <hr />
            <h3>5. ใช้ while กับ else</h3>
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
<span style={{color: '#569CD6'}}>i =</span> <span style={{color: '#7a4b4bff'}}>1</span>
{"\n"}<span style={{color: '#569CD6'}}>while</span> i &lt; <span style={{color: '#7a4b4bff'}}>4</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(i)
{"\n"}  i += <span style={{color: '#7a4b4bff'}}>1</span>
{"\n"}<span style={{color: '#569CD6'}}>else</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ลูปจบโดยไม่มี break"</span>)
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
{`1
2
3
ลูปจบโดยไม่มี break`}
            </div>

            <hr />
            <h2>สรุป</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำสำคัญ</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ความหมาย</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>while</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เริ่มลูปเมื่อเงื่อนไขเป็นจริง</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>break</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>หยุดลูปทันที</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>continue</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ข้ามรอบนี้แล้วไปทำรอบถัดไป</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>else</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ทำงานเมื่อ while จบโดยไม่มี break</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>True / False</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้ตรวจสอบเงื่อนไขของลูป</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
