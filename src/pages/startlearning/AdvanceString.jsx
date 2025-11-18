export default function AdvanceString() {
    const age = "{age}";
    const name = "{name}";
    return (
        
        <div className="page-content">
            <h1>ฟังก์ชันขั้นสูงเกี่ยวกับ String ใน Python</h1>
            <hr />

            <h3>1. การเชื่อมข้อความ (<span className="operator-symbol">join()</span>)</h3>
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
words = [<span style={{color: '#D69D85'}}>"Python"</span>, <span style={{color: '#D69D85'}}>"Java"</span>, <span style={{color: '#D69D85'}}>"Go"</span>]
{'\n'}text = <span style={{color: '#D69D85'}}>', '</span>.<span style={{color: '#569CD6'}}>join</span>(words)
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text)
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
{`Python, Java, Go`}
            </pre>

            <h3>2. นับจำนวนตัวอักษร (<span className="operator-symbol">count()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"banana"</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>count</span>(<span style={{color: '#D69D85'}}>"a"</span>))
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
{`3`}
            </pre>

            <h3>3. ตรวจสอบตัวอักษรเริ่ม/จบ (<span className="operator-symbol">startswith(), endswith()</span>)</h3>
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
text = <span style={{color: '#D69D85'}}>"Python"</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>startswith</span>(<span style={{color: '#D69D85'}}>"Py"</span>))  # True
{'\n'}<span style={{color: '#569CD6'}}>print</span>(text.<span style={{color: '#569CD6'}}>endswith</span>(<span style={{color: '#D69D85'}}>"on"</span>))   # True
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
{`True
True`}
            </pre>

            <h3>4. การใช้ <span className="operator-symbol">f-string</span> (การฝังตัวแปรในข้อความ)</h3>
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
name = <span style={{color: '#D69D85'}}>"Alice"</span>
{'\n'}age = <span style={{color: '#7a4b4bff'}}>25</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>f</span><span style={{color: '#D69D85'}}>"ชื่อของฉันคือ</span> {name} <span style={{color: '#D69D85'}}>และฉันอายุ</span> {age} <span style={{color: '#D69D85'}}>ปี"</span>)
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
{`ชื่อของฉันคือ Alice และฉันอายุ 25 ปี`}
            </pre>

            <hr />
            <h2>ตารางสรุป String Methods ขั้นสูง</h2>
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>join()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เชื่อมข้อความใน list เป็น string เดียว</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>", ".join(["a","b"]) ➜ "a, b"</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>count()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>นับจำนวนครั้งที่ตัวอักษรปรากฏ</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"banana".count("a") ➜ 3</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>startswith()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตรวจสอบว่า string เริ่มด้วยข้อความที่กำหนด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"Python".startswith("Py") ➜ True</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>endswith()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ตรวจสอบว่า string จบด้วยข้อความที่กำหนด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>"Python".endswith("on") ➜ True</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>f-string</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฝังตัวแปรลงในข้อความ</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>f"ชื่อ {name}" ➜ "ชื่อ Alice"</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
