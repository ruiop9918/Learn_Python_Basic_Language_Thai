export default function String() {
    return (
        <div className="page-content">
            <h1>การจัดการ String ใน Python</h1>
            <hr />

            <h2>String คืออะไร?</h2>
            <h3>
                <span className="operator-symbol">String</span> เป็นลำดับของตัวอักษร ใช้สำหรับเก็บข้อความ 
                สามารถใช้เครื่องหมาย <span className="operator-symbol">''</span> หรือ <span className="operator-symbol">""</span> ครอบข้อความ
            </h3>

            <hr />
            <h3>ตัวอย่างการสร้าง String :</h3>
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
name = <span style={{color: '#D69D85'}}>"Python"</span>
{'\n'}greeting = <span style={{color: '#D69D85'}}>"Hello"</span>
            </pre>

            <hr />
            <h2>ฟังก์ชันพื้นฐานเกี่ยวกับ String</h2>

            <h3>1. ความยาวของ String (<span className="operator-symbol">len()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"Hello World"</span>
{'\n'}length = <span style={{color: '#569CD6'}}>len</span>(text)
{'\n'}<span style={{color: '#569CD6'}}>print</span>(length)
            </pre>
            <p>ผลลัพธ์:</p>
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
{`11`}
            </pre>

            <h3>2. แปลงตัวอักษรเป็นพิมพ์ใหญ่ / พิมพ์เล็ก ด้วย <span className="operator-symbol">upper()</span> กับ <span className="operator-symbol">lower()</span></h3>
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
text = <span style={{color: '#D69D85'}}>"hello world"</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>upper</span>())  <spen style={{color:'#7cad5aff'}}># แปลงเป็นพิมพ์ใหญ่</spen>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>lower</span>())  <spen style={{color:'#7cad5aff'}}># แปลงเป็นพิมพ์เล็ก</spen>
            </pre>
            <p>ผลลัพธ์:</p>
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
{`HELLO WORLD
hello world`}
            </pre>

            <h3>3. การตัดช่องว่าง (<span className="operator-symbol">strip()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"   Python   "</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>strip</span>())  <spen style={{color:'#7cad5aff'}}># ลบช่องว่างด้านหน้าและหลัง</spen>
            </pre>
            <p>ผลลัพธ์:</p>
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
{`Python`}
            </pre>

            <h3>4. การแบ่ง String (<span className="operator-symbol">split()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"Python,Java,Go"</span>
{'\n'}languages = text.<span style={{color: '#569CD6'}}>split</span>(<span style={{color: '#D69D85'}}>"</span>,<span style={{color: '#D69D85'}}>"</span>)  <spen style={{color:'#7cad5aff'}}># แยกด้วย comma</spen>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(languages)
            </pre>
            <p>ผลลัพธ์:</p>
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
{`['Python', 'Java', 'Go']`}
            </pre>

            <h3>5. การเข้ารหัสและค้นหา (<span className="operator-symbol">find(), replace()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"I love Python"</span>
{'\n'}index = text.<span style={{color: '#569CD6'}}>find</span>(<span style={{color: '#D69D85'}}>"Python"</span>)
{'\n'}new_text = text.<span style={{color: '#569CD6'}}>replace</span>(<span style={{color: '#D69D85'}}>"Python"</span>, <span style={{color: '#D69D85'}}>"Java"</span>)
{'\n'}<span style={{color: '#569CD6'}}>print</span>(index)
{'\n'}<span style={{color: '#569CD6'}}>print</span>(new_text)
            </pre>
            <p>ผลลัพธ์:</p>
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
{`7
I love Java`}
            </pre>

            <hr />
            <h2>สรุปฟังก์ชันสำคัญของ String</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชัน</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>len()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>นับจำนวนตัวอักษรใน string</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>len("Hello") ➜ 5</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>upper()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แปลงเป็นพิมพ์ใหญ่</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"abc".upper() ➜ "ABC"</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>lower()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แปลงเป็นพิมพ์เล็ก</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"ABC".lower() ➜ "abc"</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>strip()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบช่องว่างด้านหน้า/หลัง</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"  abc  ".strip() ➜ "abc"</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>split()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แยก string เป็น list ตามตัวคั่น</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"a,b,c".split(",") ➜ ['a','b','c']</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>find()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ค้นหาตำแหน่งของ substring</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"abc".find("b") ➜ 1</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>replace()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แทนที่ข้อความ</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"abc".replace("a","x") ➜ "xbc"</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
