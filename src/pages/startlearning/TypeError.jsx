export default function TypeError() {
    return (
        <>
            <div className="page-content">
                <h1>TypeError ใน Python</h1>
                <hr />

                <p>
                    <span className="keyword">TypeError</span> คือข้อผิดพลาดที่เกิดขึ้นเมื่อเราใช้ค่าหรือชนิดข้อมูลผิดประเภท เช่น
                    นำ <span className="highlight">string</span> มาบวกกับ <span className="highlight">int</span> โดยตรง
                </p>

                <h2>ตัวอย่าง TypeError พื้นฐาน</h2>
                <div className="sizecode" style={{
                    backgroundColor: '#1e1e1ed8',
                    color: '#d4d4d4',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre',
                    lineHeight: '1.5',
                    textAlign: 'start',
                }}>
<span style={{ color: '#7cad5aff' }}># พยายามบวก string กับ int</span>
{"\n"}x = <span style={{ color: '#D69D85' }}>"10"</span>
{"\n"}y = <span style={{ color: '#7a4b4bff' }}>5</span>
{"\n"}<span style={{ color: '#569CD6' }}>print</span>(x + y)
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
                    textAlign: 'start',
                }}>
{`TypeError: can only concatenate str (not "int") to str`}
                </div>

                <hr />
                <h2>การจัดการ TypeError ด้วย try...except</h2>
                <div className="sizecode" style={{
                    backgroundColor: '#1e1e1ed8',
                    color: '#d4d4d4',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre',
                    lineHeight: '1.5',
                    textAlign: 'start',
                }}>
<span style={{ color: '#7cad5aff' }}># จัดการ TypeError ด้วย try...except</span>
{"\n"}<span style={{ color: '#569CD6' }}>try</span>:
{"\n"}    x = <span style={{ color: '#D69D85' }}>"10"</span>
{"\n"}    y = <span style={{ color: '#7a4b4bff' }}>5</span>
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(x + y)
{"\n"}<span style={{ color: '#569CD6' }}>except</span> <span style={{color:'#086d2fff'}}>TypeError</span>:
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>"ไม่สามารถบวก string กับ int ได้"</span>)
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
                    textAlign: 'start',
                }}>
{`ไม่สามารถบวก string กับ int ได้`}
                </div>

                <hr />
                <h2>TypeError จากการเรียกฟังก์ชันผิดรูปแบบ</h2>
                <div className="sizecode" style={{
                    backgroundColor: '#1e1e1ed8',
                    color: '#d4d4d4',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre',
                    lineHeight: '1.5',
                    textAlign: 'start',
                }}>
<span style={{ color: '#7cad5aff' }}># เรียกฟังก์ชันด้วยอาร์กิวเมนต์ผิดประเภท</span>
{"\n"}<span style={{ color: '#569CD6' }}>def</span> multiply(a, b):
{"\n"}    <span style={{ color: '#569CD6' }}>return</span> a * b
{"\n"}
{"\n"}<span style={{ color: '#569CD6' }}>try</span>:
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(multiply(<span style={{ color: '#D69D85' }}>"10"</span>, <span style={{ color: '#D69D85' }}>"5"</span>))
{"\n"}<span style={{ color: '#569CD6' }}>except</span> <span style={{color:'#086d2fff'}}>TypeError</span>:
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>"เกิด TypeError จากการคูณ string สองตัว"</span>)
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
                    textAlign: 'start',
                }}>
{`เกิด TypeError จากการคูณ string สองตัว`}
                </div>

                <hr />
                <h2>TypeError กับการใช้ฟังก์ชัน Built-in</h2>
                <div className="sizecode" style={{
                    backgroundColor: '#1e1e1ed8',
                    color: '#d4d4d4',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre',
                    lineHeight: '1.5',
                    textAlign: 'start',
                }}>
<span style={{ color: '#7cad5aff' }}># ใช้ len() กับชนิดข้อมูลที่ไม่รองรับ</span>
{"\n"}<span style={{ color: '#569CD6' }}>try</span>:
{"\n"}    num = <span style={{ color: '#7a4b4bff' }}>100</span>
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#569CD6' }}>len</span>(num))
{"\n"}<span style={{ color: '#569CD6' }}>except</span> <span style={{color:'#086d2fff'}}>TypeError</span> <span style={{ color: '#569CD6' }}>as</span> e:
{"\n"}    <span style={{ color: '#569CD6' }}>print</span>(<span style={{ color: '#D69D85' }}>"error: object of type 'int' has no len()"</span>)
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
                    textAlign: 'start',
                }}>
{`error: object of type 'int' has no len()`}
                </div>

                <hr />
                <h2>สรุป TypeError ที่พบบ่อย</h2>
                <table className="sizetable" style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: '16px',
                    textAlign: 'left'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>กรณี</th>
                            <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>บวกชนิดข้อมูลต่างกัน</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>เช่น "10" + 5</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>เรียกฟังก์ชันผิดประเภท</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ส่งค่าผิดชนิดให้ฟังก์ชัน</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้ len() กับตัวเลข</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>len() ใช้ได้เฉพาะกับ sequence เช่น list, str</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ดำเนินการทางคณิตกับ string</td>
                            <td style={{ padding: '8px', border: '1px solid #ccc' }}>string ไม่รองรับการ +, -, *, /   เเละ int</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
