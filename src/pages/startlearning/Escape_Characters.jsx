export default function Escape_Characters(){
    const name = '{name}';
    const age = '{age}';
    return(
        <div className="page-content">
            <h1>ตัวอักษรพิเศษ (Escape Characters) ในภาษา Python</h1>
<hr />

<p>
ในภาษา Python เราสามารถใช้ <span className="operator-symbol">Escape Characters</span> เพื่อควบคุมการแสดงผลของข้อความ
เช่น การขึ้นบรรทัดใหม่ การเว้นช่อง หรือการแสดงเครื่องหมายพิเศษภายในข้อความ
</p>

<h2>ตัวอักษรพิเศษที่นิยมใช้</h2>
<div className="sizecode" style={{
    backgroundColor: '#1e1e1ed8',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: 'start'
}}>
<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"สวัสดี<span style={{color: '#f3f599ff'}}>\n</span>โลก"</span>)    <span style={{color: '#7cad5aff'}}># ขึ้นบรรทัดใหม่</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ชื่อ:<span style={{color: '#f3f599ff'}}>\t</span>วิทวัส"</span>)     <span style={{color: '#7cad5aff'}}># เว้นช่องแบบ tab</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"C:<span style={{color: '#f3f599ff'}}>\\</span>Users<span style={{color: '#f3f599ff'}}>\\</span>Vitawat"</span>)  <span style={{color: '#7cad5aff'}}># แสดง backslash จริง</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>'I<span style={{color: '#f3f599ff'}}>\'</span>m happy'</span>)       <span style={{color: '#7cad5aff'}}># แสดงเครื่องหมาย '</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เขาพูดว่า <span style={{color: '#f3f599ff'}}>\"</span>สวัสดี<span style={{color: '#f3f599ff'}}>\"</span> "</span>)  <span style={{color: '#7cad5aff'}}># แสดงเครื่องหมาย "</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello<span style={{color: '#f3f599ff'}}>\r</span>Hi"</span>)        <span style={{color: '#7cad5aff'}}># เขียนทับบรรทัดเดิม</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"abc<span style={{color: '#f3f599ff'}}>\b</span>"</span>)            <span style={{color: '#7cad5aff'}}># ลบตัวอักษรก่อนหน้า</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"หน้า1<span style={{color: '#f3f599ff'}}>\f</span>หน้า2"</span>)     <span style={{color: '#7cad5aff'}}># ขึ้นหน้าใหม่ (แทบไม่ใช้แล้ว)</span>
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
    textAlign: 'start'
}}>
{`สวัสดี
โลก
ชื่อ:    วิทวัส
C:\\Users\\Vitawat
I'm happy
เขาพูดว่า "สวัสดี"
Hi
ab
หน้า1
(ขึ้นหน้าใหม่)
หน้า2`}
</div>

<hr />
<h2> ตัวช่วยอื่นในการ “เว้นบรรทัด” หรือ “จัดข้อความ”</h2>

<h3>1. ใช้ print() หลายครั้ง</h3>
<div className="sizecode" style={{
    backgroundColor: '#1e1e1ed8',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: 'start'
}}>
<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"สวัสดี"</span>)
{'\n'}<span style={{color: '#569CD6'}}>print</span>()
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"โลก"</span>)
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
    textAlign: 'start'
}}>
{`สวัสดี

โลก`}
</div>

<h3>2. ใช้ end ใน print()</h3>
<p>โดยปกติ <code>print()</code> จะจบด้วยการขึ้นบรรทัด (<code>\n</code>) แต่สามารถเปลี่ยนได้โดยใช้ <code>end</code></p>

<div className="sizecode" style={{
    backgroundColor: '#1e1e1ed8',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: 'start'
}}>
<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello"</span>, <span style={{color: '#569CD6'}}>end</span>=<span style={{color: '#D69D85'}}>" "</span>)
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"World"</span>)
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
    textAlign: 'start'
}}>
{`Hello World`}
</div>

<h3>3. ใช้ f-string เพื่อจัดข้อความหลายบรรทัด</h3>
<div className="sizecode" style={{
    backgroundColor: '#1e1e1ed8',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: 'start'
}}>
name = <span style={{color: '#D69D85'}}>"วิทวัส"</span>
{'\n'}age = <span style={{color: '#7a4b4bff'}}>18</span>
{'\n'}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>f</span><span style={{color: '#D69D85'}}>"""ข้อมูลผู้ใช้:</span>
{'\n'}<span style={{color: '#D69D85'}}>ชื่อ: {name}</span>
{'\n'}<span style={{color: '#D69D85'}}>อายุ: {age} ปี</span>
{'\n'}<span style={{color: '#D69D85'}}>"""</span>)
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
    textAlign: 'start'
}}>
{`ข้อมูลผู้ใช้:
ชื่อ: วิทวัส
อายุ: 18 ปี`}
</div>

<hr />
<h2>ตารางสรุป Escape Characters ที่ใช้บ่อย</h2>

<table className="sizetable" style={{
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '16px',
    textAlign: 'left'
}}>
    <thead>
        <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอักษร</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ความหมาย</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\n</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ขึ้นบรรทัดใหม่</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("สวัสดี\nโลก")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\t</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>เว้นช่องแบบ tab</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("ชื่อ:\tวิทวัส")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\\</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>แสดง backslash จริง</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("C:\\Users\\Vitawat")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\'</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>แสดง ' ภายใน string</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print('I\'m happy')</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\"</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>แสดง " ภายใน string</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("เขาพูดว่า \"สวัสดี\" ")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\r</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนบรรทัด (เขียนทับข้อความเดิม)</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("Hello\rHi")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\b</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบตัวอักษรก่อนหน้า</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("abc\b")</td>
        </tr>
        <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>\f</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ขึ้นหน้าใหม่ (ไม่ค่อยใช้)</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>print("หน้า1\fหน้า2")</td>
        </tr>
    </tbody>
</table>

        </div>
    )
}