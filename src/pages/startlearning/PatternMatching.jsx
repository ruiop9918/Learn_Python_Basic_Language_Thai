export default function PatternMatching() {
    return (
        <div className="page-content">
            <h1>Pattern Matching ในภาษา Python</h1>
            <hr />

            <h2>Pattern Matching คืออะไร?</h2>
            <p>
                <b>Pattern Matching</b> คือฟีเจอร์ใหม่ใน Python (ตั้งแต่เวอร์ชัน 3.10)
                ใช้คำสั่ง <b>match ... case</b> เพื่อตรวจสอบ “รูปแบบของข้อมูล” (pattern)
                คล้าย <b>switch-case</b> ในภาษาอื่น แต่สามารถแยกโครงสร้างของข้อมูลได้ละเอียดกว่า เช่น list, tuple, dict เป็นต้น
            </p>

            <div className="sizecode" style={codeBlock}>
<span style={{ color: '#7cad5aff' }}># ตัวอย่างพื้นฐานของ match-case</span>
{"\n"}status = <span style={{ color: '#D69D85' }}>'ok'</span>
{"\n"}<span style={{ color: '#569CD6' }}>match</span> status:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#D69D85' }}>'ok'</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Everything is fine.'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#D69D85' }}>'error'</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'An error occurred.'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Unknown status.'</span>)
            </div>

            <p>ผลลัพธ์:</p>
            <div style={outputBlock}>{`Everything is fine.`}</div>

            <hr />
            <h2>Literal Pattern</h2>
            <p>ตรวจสอบค่าที่ “ตรงตัว” เช่น ตัวเลขหรือ string</p>

            <div className="sizecode" style={codeBlock}>
code = <span style={{ color: '#7a4b4bff' }}>404</span>
{"\n"}<span style={{ color: '#569CD6' }}>match</span> code:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#7a4b4bff' }}>200</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'OK'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#7a4b4bff' }}>404</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Not Found'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div style={outputBlock}>{`Not Found`}</div>

            <hr />
            <h2>Wildcard Pattern ( _ )</h2>
            <p>ใช้ " _ " เพื่อจับค่าทุกอย่างที่ไม่ตรงกับ case ด้านบน (เหมือน default)</p>

            <div className="sizecode" style={codeBlock}>
x = <span style={{ color: '#7a4b4bff' }}>99</span>
{"\n"}<span style={{ color: '#569CD6' }}>match</span> x:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#7a4b4bff' }}>1</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'One'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Something else'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`Something else`}</div>

            <hr />
            <h2>Capture Pattern</h2>
            <p>ใช้เก็บค่าจากข้อมูลในตัวแปรที่ match ได้</p>

            <div className="sizecode" style={codeBlock}>
data = [<span style={{ color: '#7a4b4bff' }}>1</span>, <span style={{ color: '#7a4b4bff' }}>2</span>, <span style={{ color: '#7a4b4bff' }}>3</span>]
{"\n"}<span style={{ color: '#569CD6' }}>match</span> data:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> [x, y, z]:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(x, y, z)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`1 2 3`}</div>

            <hr />
            <h2> Guard (if เงื่อนไข)</h2>
            <p>เพิ่มเงื่อนไขใน case ด้วย if เพื่อกรองข้อมูลเพิ่มเติม</p>

            <div className="sizecode" style={codeBlock}>
num = <span style={{ color: '#7a4b4bff' }}>10</span>
{"\n"}<span style={{ color: '#569CD6' }}>match</span> num:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> x <span style={{ color: '#569CD6' }}>if</span> x &gt; <span style={{ color: '#7a4b4bff' }}>5</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Greater than 5'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'5 or less'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`Greater than 5`}</div>

            <hr />
            <h2> OR Pattern</h2>
            <p>ใช้ “ | ” เพื่อรวมหลายเงื่อนไขไว้ใน case เดียว</p>

            <div className="sizecode" style={codeBlock}>
command = <span style={{ color: '#D69D85' }}>'start'</span>
{"\n"}<span style={{ color: '#569CD6' }}>match</span> command:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> <span style={{ color: '#D69D85' }}>'start'</span> | <span style={{ color: '#D69D85' }}>'run'</span>:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Running...'</span>)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Unknown command'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`Running...`}</div>

            <hr />
            <h2> Sequence Pattern</h2>
            <p>ใช้จับลำดับ เช่น list หรือ tuple โดยไม่ต้องใช้ index</p>

            <div className="sizecode" style={codeBlock}>
data = [<span style={{ color: '#7a4b4bff' }}>1</span>, <span style={{ color: '#7a4b4bff' }}>2</span>]
{"\n"}<span style={{ color: '#569CD6' }}>match</span> data:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> [x, y]:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(x, y)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Not matched'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`1 2`}</div>

            <hr />
            <h2>Mapping Pattern</h2>
            <p>ใช้จับ Dictionary โดยตรวจสอบ key และ value ที่ตรงกัน</p>

            <div className="sizecode" style={codeBlock}>
info = {`{`}<span style={{ color: '#D69D85' }}>'type'</span>: <span style={{ color: '#D69D85' }}>'user'</span>, <span style={{ color: '#D69D85' }}>'id'</span>: <span style={{ color: '#7a4b4bff' }}>101</span>{`}`}
{"\n"}<span style={{ color: '#569CD6' }}>match</span> info:
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> {`{`}<span style={{ color: '#D69D85' }}>'type'</span>: <span style={{ color: '#D69D85' }}>'user'</span>, <span style={{ color: '#D69D85' }}>'id'</span>: user_id{`}`}:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'User ID ='</span>, user_id)
{"\n"}    <span style={{ color: '#569CD6' }}>case</span> _:
{"\n"}        <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>'Unknown format'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={outputBlock}>{`User ID = 101`}</div>

            <hr />
            <h2> สรุป Pattern Matching</h2>
            <table className="sizetable" style={tableStyle}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={th}>ประเภท Pattern</th>
                        <th style={th}>คำอธิบาย</th>
                        <th style={th}>ตัวอย่าง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={td}>Literal Pattern</td>
                        <td style={td}>ตรวจสอบค่าตรงตัว เช่น 200, "ok"</td>
                        <td style={td}>case 404:</td>
                    </tr>
                    <tr>
                        <td style={td}>Wildcard Pattern</td>
                        <td style={td}>จับค่าทุกอย่าง (เหมือน default)</td>
                        <td style={td}>case _:</td>
                    </tr>
                    <tr>
                        <td style={td}>Capture Pattern</td>
                        <td style={td}>เก็บค่าที่ match ไว้ในตัวแปร</td>
                        <td style={td}>case [x, y]:</td>
                    </tr>
                    <tr>
                        <td style={td}>Guard</td>
                        <td style={td}>เพิ่มเงื่อนไข if ใน case</td>
                        <td style={td}>case x if x &gt; 10:</td>
                    </tr>
                    <tr>
                        <td style={td}>OR Pattern</td>
                        <td style={td}>หลาย pattern ใช้ case เดียว</td>
                        <td style={td}>case "yes" | "ok":</td>
                    </tr>
                    <tr>
                        <td style={td}>Sequence Pattern</td>
                        <td style={td}>จับ list หรือ tuple ตามลำดับ</td>
                        <td style={td}>case [a, b]:</td>
                    </tr>
                    <tr>
                        <td style={td}>Mapping Pattern</td>
                        <td style={td}>จับคู่ dictionary ด้วย key:value</td>
                        <td style={td}>case {'{'}"id": n{'}'}:</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

//  สไตล์พื้นฐาน
const codeBlock = {
    backgroundColor: '#1e1e1ed8',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: "start",
};

const outputBlock = {
    backgroundColor: '#111',
    color: '#9cdcfe',
    padding: '12px',
    borderRadius: '8px',
    fontFamily: 'monospace',
    whiteSpace: 'pre',
    lineHeight: '1.5',
    textAlign: "start",
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '16px',
    textAlign: 'left',
};

const th = {
    padding: '8px',
    border: '1px solid #ccc',
};

const td = {
    padding: '8px',
    border: '1px solid #ccc',
};
