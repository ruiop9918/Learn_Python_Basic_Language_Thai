export default function ForLoop(){
    return(
        <div className="page-content">
             <h1>For Loop ใน Python</h1>
            <hr />

            <h2>For Loop คืออะไร?</h2>
            <p>
                <span className="operator-symbol">For Loop</span> ใช้สำหรับ{" "}
                <span className="operator-symbol">วนซ้ำ (loop)</span> เพื่อทำงานซ้ำๆ กับ{" "}
                <span className="operator-symbol">ลำดับของข้อมูล (sequence)</span> เช่น{" "}
                <span className="operator-symbol">list</span>,{" "}
                <span className="operator-symbol">tuple</span>,{" "}
                <span className="operator-symbol">string</span> หรือ{" "}
                <span className="operator-symbol">range()</span> โดยจะทำงานทีละค่าในลำดับนั้นจนครบทุกตัว
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
    <span style={{color: '#569CD6'}}>for </span>ตัวแปร <span style={{color: '#569CD6'}}>in </span>ลำดับข้อมูล:
    {"\n"}  <span style={{color: '#7cad5aff'}}># คำสั่งที่ต้องการให้ทำซ้ำ</span>
            </div>

            <hr />
            <h2>ตัวอย่างการใช้งาน</h2>
            <h3>1. วนลูปผ่านรายการ (List)</h3>
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
<span style={{color: '#569CD6'}}>fruits =</span> [<span style={{color: '#D69D85'}}>"apple", "banana", "cherry"</span>]
{"\n"}<span style={{color: '#569CD6'}}>for</span> f <span style={{color: '#569CD6'}}>in</span> fruits:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(f)
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
{`apple
banana
cherry`}
            </div>

            <hr />
            <h3>2. ใช้ร่วมกับ <span className="operator-symbol">range()</span></h3>
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
<span style={{color: '#569CD6'}}>for</span> i <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>5</span>):
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
{`0
1
2
3
4`}
            </div>

            <hr />
            <h3>3. ใช้ <span className="operator-symbol">range(start, stop, step)</span></h3>
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
<span style={{color: '#569CD6'}}>for</span> i <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>1</span>,<span style={{color: '#7a4b4bff'}}>10</span>,<span style={{color: '#7a4b4bff'}}>2</span>):
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
3
5
7
9`}
            </div>

            <hr />
            <h3>4. วนผ่าน String</h3>
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
<span style={{color: '#569CD6'}}>for</span> ch <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#D69D85'}}>"Python"</span>:
{"\n"}  <span style={{color: '#569CD6'}}>print</span>(ch)
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
{`P
y
t
h
o
n`}
            </div>

            <hr />
            <h3>5. ใช้ร่วมกับ if</h3>
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
<span style={{color: '#569CD6'}}>for</span> num <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>1</span>,<span style={{color: '#7a4b4bff'}}>7</span>) :
{"\n"}   <span style={{color: '#569CD6'}}>if</span> num % <span style={{color: '#7a4b4bff'}}>2</span> == <span style={{color: '#7a4b4bff'}}>0</span> :
{"\n"}      <span style={{color: '#569CD6'}}>print</span>(num, <span style={{color: '#D69D85'}}>"เป็นเลขคู่"</span>)

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
{`2 เป็นเลขคู่
4 เป็นเลขคู่
6 เป็นเลขคู่`}
            </div>

            <hr />
            <h3>6. ใช้ <span className="operator-symbol">break / continue</span></h3>
            <p>ใช้ <span className="operator-symbol">break</span>หลังเงื่อนไขจะตัดทิ้งทั้งหมด เช่น :</p>
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
<span style={{color: '#569CD6'}}>for</span> i <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>10</span>) :
{"\n"}  <span style={{color: '#569CD6'}}>if</span> i == <span style={{color: '#7a4b4bff'}}>5</span> :
{"\n"}     <span style={{color: '#569CD6'}}>break</span>
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
{`0
1
2
3
4`}
            </div>

            <p>และถ้าใช้ <span className="operator-symbol">continue</span> จะข้ามรอบนั้นไป เช่น:</p>

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
<span style={{color: '#569CD6'}}>for</span> i <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>5</span>) :
{"\n"}  <span style={{color: '#569CD6'}}>if</span> i == <span style={{color: '#7a4b4bff'}}>2</span> :
{"\n"}     <span style={{color: '#569CD6'}}>continue</span>
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
{`0
1
3
4`}
            </div>

            <hr />
            <h3>7. วนลูปซ้อน (Nested Loop)</h3>
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
<span style={{color: '#569CD6'}}>for</span> i <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>1</span>,<span style={{color: '#7a4b4bff'}}>4</span>) :
{"\n"}   <span style={{color: '#569CD6'}}>for</span> j <span style={{color: '#569CD6'}}>in</span> <span style={{color: '#569CD6'}}>range</span>(<span style={{color: '#7a4b4bff'}}>1</span>,<span style={{color: '#7a4b4bff'}}>4</span>) :
{"\n"}      <span style={{color: '#569CD6'}}>print</span>(i , j)

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
{`1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3`}
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>for</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เริ่มลูป</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>in</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้ระบุสิ่งที่จะวนผ่าน เช่น list, string</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>range()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>สร้างช่วงตัวเลขสำหรับวนลูป</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>break</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>หยุดลูปทันที</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>continue</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ข้ามรอบนี้ไปทำรอบถัดไป</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>else</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้กับ for ได้ เมื่อไม่มี break เกิดขึ้น</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}