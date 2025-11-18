export default function ExceptionHandling() {
    return (
        <>
            <div className="page-content">
                <h1>การจัดการ Exception ใน Python</h1>
                <hr />

                <p>
                    Exception คือข้อผิดพลาดที่เกิดขึ้นระหว่างรันโปรแกรม Python ใช้ <span className="operator-symbol">try...except</span> เพื่อจับข้อผิดพลาดและป้องกันโปรแกรมหยุดกะทันหัน
                </p>

                <h2>Exception แบบง่าย</h2>
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
<span style={{color:'#7cad5aff'}}># แบ่งตัวเลขโดยใช้ try...except</span>
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>10</span>
{"\n"}    y = <span style={{color:'#7a4b4bff'}}>0</span>
{"\n"}    result = x / y
{"\n"}<span style={{color:'#569CD6'}}>except</span> <span style={{color:'#086d2fff'}}>ZeroDivisionError</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"หารด้วย 0 ไม่ได้"</span>)
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
{`หารด้วย 0 ไม่ได้`}
                </div>

                <hr />
                <h2>try...except...else</h2>
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
<span style={{color:'#7cad5aff'}}># else จะทำงานเมื่อไม่มี Exception</span>
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>10</span>
{"\n"}    y = <span style={{color:'#7a4b4bff'}}>2</span>
{"\n"}    result = x / y
{"\n"}<span style={{color:'#569CD6'}}>except</span> <span style={{color:'#086d2fff'}}>ZeroDivisionError</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"หารด้วย 0 ไม่ได้"</span>)
{"\n"}<span style={{color:'#569CD6'}}>else</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"ผลลัพธ์: 5.0"</span>)
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
{`ผลลัพธ์: 5.0`}
                </div>

                <hr />
                <h2>try...except...finally</h2>
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
<span style={{color:'#7cad5aff'}}># finally จะทำงานเสมอ</span>
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>5</span>
{"\n"}    y = <span style={{color:'#7a4b4bff'}}>0</span>
{"\n"}    result = x / y
{"\n"}<span style={{color:'#569CD6'}}>except</span> <span style={{color:'#086d2fff'}}>ZeroDivisionError</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"หารด้วย 0 ไม่ได้"</span>)
{"\n"}<span style={{color:'#569CD6'}}>finally</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"ทำงานเสมอ"</span>)
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
{`หารด้วย 0 ไม่ได้
ทำงานเสมอ`}
                </div>

                <hr />
                <h2>raise ข้อผิดพลาดเอง</h2>
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
<span style={{color:'#7cad5aff'}}># โยน Exception เอง</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> check_positive(n):
{"\n"}    <span style={{color:'#569CD6'}}>if</span> n &lt; <span style={{color:'#7a4b4bff'}}>0</span>:
{"\n"}        <span style={{color:'#569CD6'}}>raise</span> <span style={{color:'#086d2fff'}}>ValueError</span>(<span style={{color:'#D69D85'}}>"ตัวเลขติดลบ"</span>)
{"\n"}    <span style={{color:'#569CD6'}}>return</span> n
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(check_positive(-5))
{"\n"}<span style={{color:'#569CD6'}}>except</span> <span style={{color:'#086d2fff'}}>ValueError</span> <span style={{color:'#569CD6'}}>as</span> e:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"เกิดข้อผิดพลาด: ตัวเลขติดลบ"</span>)
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
{`เกิดข้อผิดพลาด: ตัวเลขติดลบ`}
                </div>

                <hr />
                <h2>จับหลายชนิด Exception</h2>
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
<span style={{color:'#7cad5aff'}}># จับหลายชนิดของ Exception</span>
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    x = <span style={{color:'#569CD6'}}>int</span>(<span style={{color:'#D69D85'}}>"abc"</span>)
{"\n"}<span style={{color:'#569CD6'}}>except</span> (<span style={{color:'#086d2fff'}}>ValueError</span>, <span style={{color:'#086d2fff'}}>TypeError</span>) <span style={{color:'#569CD6'}}>as</span> e:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>""" {'\n'}error:invalid literal {'\n'}for int() with base 10:'abc' {'\n'}"""</span>)
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
{`error: invalid literal 
for int() with base 10: 'abc'`}
                </div>

                <hr />
                <h2>Nested Try</h2>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Nested Try</span>
{"\n"}<span style={{color:'#569CD6'}}>try</span>:
{"\n"}    x = <span style={{color:'#7a4b4bff'}}>10</span>
{"\n"}    y = <span style={{color:'#7a4b4bff'}}>0</span>
{"\n"}    <span style={{color:'#569CD6'}}>try</span>:
{"\n"}        result = x / y
{"\n"}    <span style={{color:'#569CD6'}}>except</span> <span style={{color:'#086d2fff'}}>ZeroDivisionError</span>:
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"หารด้วย 0 ใน Nested Try"</span>)
{"\n"}<span style={{color:'#569CD6'}}>except</span> Exception <span style={{color:'#569CD6'}}>as</span> e:
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"เกิดข้อผิดพลาดอื่น"</span>)
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
{`หารด้วย 0 ใน Nested Try`}
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
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>try</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ทดลองโค้ดที่อาจเกิด Exception</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>except</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>จับข้อผิดพลาดชนิดที่กำหนด</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>else</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ทำงานเมื่อ try ไม่มีข้อผิดพลาด</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>finally</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ทำงานเสมอ ไม่ว่าจะเกิด Exception หรือไม่</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>raise</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>โยน Exception เอง</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
