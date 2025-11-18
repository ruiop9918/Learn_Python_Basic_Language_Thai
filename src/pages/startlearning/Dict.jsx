export default function Dict() {
    return (
        <div className="page-content">
            <h1>Dictionary และฟังก์ชันจัดการ Dictionary ใน Python</h1>
            <hr />

            <h2>Dictionary คืออะไร?</h2>
            <p>
                <b>Dictionary</b> (พจนานุกรม) คือโครงสร้างข้อมูลที่เก็บข้อมูลในรูปแบบ{" "}
                <b>คู่ Key : Value</b> โดยที่ Key ต้องไม่ซ้ำกัน  
                ใช้เมื่อเราต้องการเข้าถึงค่าผ่านชื่อ (key) แทนที่จะเป็นตำแหน่ง (index)
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
<span style={{ color: '#7cad5aff' }}># การสร้าง Dictionary</span>
{"\n"}person = {`{`}
{"\n"}    <span style={{ color: '#D69D85' }}>'name'</span>: <span style={{ color: '#D69D85' }}>'John'</span>,
{"\n"}    <span style={{ color: '#D69D85' }}>'age'</span>: <span style={{ color: '#7a4b4bff' }}>25</span>,
{"\n"}    <span style={{ color: '#D69D85' }}>'city'</span>: <span style={{ color: '#D69D85' }}>'Bangkok'</span>
{"\n"}{`}`}
{"\n"}<span style={{ color: '#569CD6' }}>print</span>(person)
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
{`{'name': 'John', 'age': 25, 'city': 'Bangkok'}`}
            </div>

            <hr />
            <h2>การเข้าถึงค่าด้วย Key</h2>
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
person = {`{`}<span style={{ color: '#D69D85' }}>'name'</span>: <span style={{ color: '#D69D85' }}>'John'</span>, <span style={{ color: '#D69D85' }}>'age'</span>: <span style={{ color: '#7a4b4bff' }}>25</span>{`}`}
{"\n"}<span style={{ color: '#569CD6' }}>print</span>(person[<span style={{ color: '#D69D85' }}>'name'</span>])
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
{`John`}
            </div>

            <hr />
            <h2>การเพิ่มและแก้ไขค่า</h2>
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
person = {`{`}<span style={{ color: '#D69D85' }}>'name'</span>: <span style={{ color: '#D69D85' }}>'John'</span>{`}`}
{"\n"}person[<span style={{ color: '#D69D85' }}>'age'</span>] = <span style={{ color: '#7a4b4bff' }}>25</span>
{"\n"}person[<span style={{ color: '#D69D85' }}>'name'</span>] = <span style={{ color: '#D69D85' }}>'Jane'</span>
{"\n"}<span style={{ color: '#569CD6' }}>print</span>(person)
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
{`{'name': 'Jane', 'age': 25}`}
            </div>

            <hr />
            <h2>การลบข้อมูลใน Dictionary</h2>
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
person = {`{`}<span style={{ color: '#D69D85' }}>'name'</span>: <span style={{ color: '#D69D85' }}>'John'</span>, <span style={{ color: '#D69D85' }}>'age'</span>: <span style={{ color: '#7a4b4bff' }}>25</span>{`}`}
{"\n"}<span style={{ color: '#569CD6' }}>del</span> person[<span style={{ color: '#D69D85' }}>'age'</span>]
{"\n"}<span style={{ color: '#569CD6' }}>print</span>(person)
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
{`{'name': 'John'}`}
            </div>

            <hr />
            <h2>การวนลูปใน Dictionary</h2>
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
person = {`{`}<span style={{ color: '#D69D85' }}>'name'</span>: <span style={{ color: '#D69D85' }}>'John'</span>, <span style={{ color: '#D69D85' }}>'age'</span>: <span style={{ color: '#7a4b4bff' }}>25</span>{`}`}
{"\n"}<span style={{ color: '#569CD6' }}>for key</span>,<span style={{ color: '#569CD6' }}> value </span><span style={{ color: '#569CD6' }}>in</span> person.<span style={{ color: '#569CD6' }}>items</span>():
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#569CD6' }}>key</span>, <span style={{ color: '#D69D85' }}>'='</span>, <span style={{ color: '#569CD6' }}>value</span>)
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
{`name = John
age = 25`}
            </div>

            <hr />
            <h2>ฟังก์ชันที่ใช้บ่อยใน Dictionary</h2>
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>keys()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่า key ทั้งหมด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>person.keys()</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>values()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่า value ทั้งหมด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>person.values()</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>items()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่าทั้ง key และ value</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>person.items()</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>get()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่า value จาก key ที่ระบุ (หากไม่มีจะคืน None)</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>person.get('age')</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>pop()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบ key ที่ระบุและคืนค่า value</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>person.pop('age')</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
