export default function Functions() {
    return (
        <div className="page-content">
            <h1>ฟังก์ชัน (Function) ในภาษา Python</h1>
            <hr />

            <p>
                <span className="operator-symbol">Function</span> คือ กลุ่มของคำสั่งที่รวมกันไว้เพื่อให้ทำงานเฉพาะอย่าง 
                สามารถเรียกใช้งานซ้ำได้ โดยใช้คำสั่ง <code>def</code> ในการประกาศ
            </p>

            <h2>การสร้างฟังก์ชัน (Function)</h2>
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
<span style={{color:'#7cad5aff'}}># สร้างฟังก์ชันง่าย ๆ</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> greet():
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"สวัสดี Python!"</span>)
{"\n"}
{"\n"}greet()   <span style={{color:'#7cad5aff'}}># เรียกใช้งาน function</span>
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
{`สวัสดี Python!`}
            </div>

            <hr />
            <h2>ฟังก์ชันแบบมีพารามิเตอร์ (Parameter)</h2>
            <p>สามารถส่งค่าเข้าฟังก์ชันผ่านพารามิเตอร์ได้</p>

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
<span style={{color:'#7cad5aff'}}># ฟังก์ชันที่รับชื่อมาแสดงผล</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> greet(name):
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"สวัสดี"</span>, name)
{"\n"}
{"\n"}greet(<span style={{color:'#D69D85'}}>"วิทวัส"</span>)
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
{`สวัสดี วิทวัส`}
            </div>

            <hr />
            <h2>ฟังก์ชันแบบกำหนดค่าเริ่มต้น (Default Parameter)</h2>
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
<span style={{color:'#7cad5aff'}}># หากไม่ส่งค่าจะใช้ค่าเริ่มต้น</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> greet(name=<span style={{color:'#D69D85'}}>"ผู้มาเยือน"</span>):
{"\n"}    <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"สวัสดี"</span>, name)
{"\n"}
{"\n"}greet()
{"\n"}greet(<span style={{color:'#D69D85'}}>"Python"</span>)
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
{`สวัสดี ผู้มาเยือน
สวัสดี Python`}
            </div>

            <hr />
            <h2>Arguments (*args และ **kwargs)</h2>
            <p><code>*args</code> ใช้สำหรับรับค่าหลายตัวในรูปแบบ Tuple และ <code>**kwargs</code> ใช้รับค่าแบบ Dictionary</p>

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
<span style={{color:'#7cad5aff'}}># ใช้ *args</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> show_numbers(<span style={{color:'#569CD6'}}>*args</span>):
{"\n"}    <span style={{color:'#569CD6'}}>for</span> n <span style={{color:'#569CD6'}}>in</span> args:
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(n)
{"\n"}
{"\n"}show_numbers(<span style={{color:'#7a4b4bff'}}>1</span>, <span style={{color:'#7a4b4bff'}}>2</span>, <span style={{color:'#7a4b4bff'}}>3</span>)
{"\n"}
{"\n"}<span style={{color:'#7cad5aff'}}># ใช้ **kwargs</span>
{"\n"}<span style={{color:'#569CD6'}}>def</span> show_info(<span style={{color:'#569CD6'}}>**kwargs</span>):
{"\n"}    <span style={{color:'#569CD6'}}>for</span> key, value <span style={{color:'#569CD6'}}>in</span> kwargs.items():
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(key, <span style={{color:'#D69D85'}}>":"</span>, value)
{"\n"}
{"\n"}show_info(name=<span style={{color:'#D69D85'}}>"วิทวัส"</span>, age=<span style={{color:'#7a4b4bff'}}>20</span>)
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
{`1
2
3
name : วิทวัส
age : 20`}
            </div>

            <hr />
            <h2>ฟังก์ชันแบบมีค่าส่งกลับ (Return)</h2>
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
<span style={{color:'#569CD6'}}>def</span> add(a, b):
{"\n"}    <span style={{color:'#569CD6'}}>return</span> a + b
{"\n"}
{"\n"}result = add(<span style={{color:'#7a4b4bff'}}>5</span>, <span style={{color:'#7a4b4bff'}}>3</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(result)
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
{`8`}
            </div>

            <hr />
            <h2>ฟังก์ชันแบบรับและส่งค่า</h2>
            <p>สามารถส่งค่าเข้าและส่งค่ากลับออกมาได้พร้อมกัน</p>

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
<span style={{color:'#569CD6'}}>def</span> multiply(x, y):
{"\n"}    result = x * y
{"\n"}    <span style={{color:'#569CD6'}}>return</span> result
{"\n"}
{"\n"}ans = multiply(<span style={{color:'#7a4b4bff'}}>4</span>, <span style={{color:'#7a4b4bff'}}>5</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(ans)
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
{`20`}
            </div>

            <hr />
            <h2>Lambda Function (นิพจน์ย่อของฟังก์ชัน)</h2>
            <p>
                <span className="operator-symbol">Lambda Function</span> เป็นฟังก์ชันขนาดเล็กที่ไม่มีชื่อ ใช้คำสั่ง <code>lambda</code> เหมาะกับฟังก์ชันสั้น ๆ
            </p>

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
add = <span style={{color:'#569CD6'}}>lambda</span> a, b: a + b
{"\n"}<span style={{color:'#569CD6'}}>print</span>(add(<span style={{color:'#7a4b4bff'}}>3</span>, <span style={{color:'#7a4b4bff'}}>4</span>))
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
{`7`}
            </div>

            <hr />
            <h2>ตารางสรุปการใช้ ฟังก์ชัน</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ประเภท</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชันทั่วไป</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>สร้างด้วย def และเรียกใช้งานได้หลายครั้ง</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>def greet(): ...</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Default Parameter</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>มีค่าเริ่มต้นให้ตัวแปร</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>def hello(name="Python")</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>*args / **kwargs</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>รับค่าหลายตัวแบบ tuple หรือ dict</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>def show(*args, **kwargs)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Return</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ส่งค่ากลับจากฟังก์ชัน</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>return x + y</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>Lambda Function</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชันสั้นไม่มีชื่อ</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>lambda x: x + 1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
