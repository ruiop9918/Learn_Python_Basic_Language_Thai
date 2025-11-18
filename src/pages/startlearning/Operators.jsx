export default function Operator(){
    return(
        <div className="page-content">
            <h1>ประเภทของตัวดำเนินการ ใน Python</h1>
            <hr/>
            <h2>ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้สำหรับการคำนวณทางคณิตศาสตร์ทั่วไป เช่น การบวก ลบ คูณ และหาร </h3>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">+</span> (บวก) : บวกค่าสองค่าเข้าด้วยกัน</p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">-</span> (ลบ) : ลบค่าด้านขวาออกจากค่าด้านซ้าย </p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">*</span> (คูณ) : คูณค่าสองค่าเข้าด้วยกัน </p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">/</span> (หาร) : หารค่าด้านซ้ายด้วยค่าด้านขวา ผลลัพธ์จะเป็นทศนิยมเสมอ </p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">%</span> (Modulus) : หารและคืนค่าเศษที่เหลือจากการหาร </p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">**</span> (Exponentiation) : ยกกำลังค่าด้านซ้ายด้วยค่าด้านขวา</p>
            <p>- ใช้สัญลักษณ์  <span className="operator-symbol">//</span> (Floor Division) : หารและปัดเศษลงให้เป็นจำนวนเต็ม</p>
            <p>การใช้งาน : <span className="operator-symbol">ตัวเเปร (สัญลักษณ์) ตัวเเปร</span>  เช่น <span className="operator-symbol">x + y</span></p>
            <hr/>
            <h2>ตัวดำเนินการกำหนดค่า (Assignment Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้สำหรับกำหนดค่าให้กับตัวแปร </h3>
            <p>- <span className="operator-symbol">=</span> : กำหนดค่าทางขวาให้กับตัวแปรทางซ้าย</p>
            <p>- <span className="operator-symbol">+=</span> : เพิ่มค่าและกำหนดค่าใหม่ (เช่น (a += 1) เทียบเท่ากับ (a=a+1))</p>
            <p>- <span className="operator-symbol">-=</span> : ลบค่าและกำหนดค่าใหม่ (เช่น (a -= 3) เทียบเท่ากับ (a=a-3))</p>
            <p>- <span className="operator-symbol">*=</span> : คูณค่าและกำหนดค่าใหม่</p>
            <p>- <span className="operator-symbol">/=</span> : หารค่าและกำหนดค่าใหม่</p>
            <p>- <span className="operator-symbol">%=</span> : ใช้ Modulus และกำหนดค่าใหม่</p>
            <p>- <span className="operator-symbol">**=</span> : ยกกำลังและกำหนดค่าใหม่</p>
            <p>- <span className="operator-symbol">//=</span> : ใช้ Floor Division และกำหนดค่าใหม่</p>
            <hr/>
            <h2>ตัวดำเนินการเปรียบเทียบ (Comparison Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้เพื่อเปรียบเทียบค่าสองค่าและจะคืนค่าเป็น <span className="operator-symbol">True</span> หรือ <span className="operator-symbol">False</span> </h3>
            <p>- <span className="operator-symbol">==</span> (เท่ากับ): ตรวจสอบว่าค่าสองค่าเท่ากันหรือไม่</p>
            <p>- <span className="operator-symbol">!=</span> (ไม่เท่ากับ): ตรวจสอบว่าค่าสองค่าไม่เท่ากันหรือไม่</p>
            <p>- <span className="operator-symbol">&gt;</span>  (มากกว่า): ตรวจสอบว่าค่าทางซ้ายมากกว่าค่าทางขวาหรือไม่</p>
            <p>- <span className="operator-symbol">&lt;</span>  (น้อยกว่า): ตรวจสอบว่าค่าทางซ้ายน้อยกว่าค่าทางขวาหรือไม่</p>
            <p>- <span className="operator-symbol">&gt;=</span>   (มากกว่าหรือเท่ากับ): ตรวจสอบว่าค่าทางซ้ายมากกว่าหรือเท่ากับค่าทางขวาหรือไม่</p>
            <p>- <span className="operator-symbol">&lt;=</span>  (น้อยกว่าหรือเท่ากับ): ตรวจสอบว่าค่าทางซ้ายน้อยกว่าหรือเท่ากับค่าทางขวาหรือไม่ </p>
            <hr/>
            <h2>ตัวดำเนินการทางตรรกศาสตร์ (Logical Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้สำหรับเชื่อมเงื่อนไขต่างๆ และจะคืนค่าเป็น <span className="operator-symbol">True</span> หรือ <span className="operator-symbol">False</span></h3>
            <p>- <span className="operator-symbol">and</span>  : คืนค่า <span className="operator-symbol">True</span> ถ้าเงื่อนไขทั้งสองเป็นจริง</p>
            <p>- <span className="operator-symbol">or</span>  : คืนค่า <span className="operator-symbol">True</span> ถ้าเงื่อนไขอย่างน้อยหนึ่งเป็นจริง</p>
            <p>- <span className="operator-symbol">not</span>  : สลับค่าความจริงของเงื่อนไข (จาก <span className="operator-symbol">True</span> เป็น <span className="operator-symbol">False</span> และในทางกลับกัน)</p>
            <hr/>
            <h2>ตัวดำเนินการเอกลักษณ์ (Identity Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้เพื่อตรวจสอบว่าตัวแปรสองตัวชี้ไปยังอ็อบเจกต์เดียวกันในหน่วยความจำหรือไม่ โดยไม่ได้เปรียบเทียบค่าของอ็อบเจกต์ </h3>
            <p>- <span className="operator-symbol">is</span>  : คืนค่า <span className="operator-symbol">True</span> ถ้าตัวแปรทั้งสองชี้ไปยังอ็อบเจกต์เดียวกัน</p>
            <p>- <span className="operator-symbol">is not</span>  : คืนค่า <span className="operator-symbol">True</span> ถ้าตัวแปรทั้งสองไม่ได้ชี้ไปยังอ็อบเจกต์เดียวกัน</p>
            <hr/>
            <h2> ตัวดำเนินการสมาชิก (Membership Operators)</h2>
            <h3>ตัวดำเนินการเหล่านี้ใช้เพื่อตรวจสอบว่าค่าใดค่าหนึ่งมีอยู่ในลำดับข้อมูล (เช่น string, list, tuple) หรือไม่</h3>
            <p>- <span className="operator-symbol">in</span>  : คืนค่า <span className="operator-symbol">True</span> ถ้าค่าที่ระบุอยู่ในลำดับข้อมูลนั้น</p>
            <p>- <span className="operator-symbol">not in</span>  : คืนค่า <span className="operator-symbol">True</span>  ถ้าค่าที่ระบุไม่ได้อยู่ในลำดับข้อมูลนั้น</p>

        </div>
    )
}