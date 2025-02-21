<zine-page class='left'>
  <page-num>
    8
  </page-num>
  <p>
    At the time of writing, BIP-77 is still being finalized,
    and payjoin adoption is relatively low. However the 
    payjoin team has been hard at work on impressive new
    tools and docs. There's no time like the present to
    implement it and improve base layer tx!
  </p>
  <hr/>
  <p>
    Payjoin is an elegant solution for increasing scalability
    and preserving privacy. It saves block space (lower fees
    for all!) and weaken blockchain surveillance heuristics.
    Even those that don't use it benefit, but it's a team
    effort! The advantages are proportional to the level of
    adoption. Everyone stands to gain from widespread payjoin
    use.
  </p>
  <hr/>
  <p class='text-center text-small'>
    Thanks for reading! Ready to learn more?
    Want free copies of this and other zines? Visit:
  </p>
  <table class='contents-centered'>
    <tr style='margin: auto 0;'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: rotate(90deg) translate(-12%);'
        >
        〜〜〜
      </td>
      <td class='lean seamless'>
        https://satsie.dev/zines
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: rotate(-90deg) translate(-16%);'
        >
        〜〜〜
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～
      </td>
    </tr>
  </table>
</zine-page>

<zine-page class='right'>
  <img alt="Satsie's Pocket Guide" src='./static/satsies-pocket-guide.th.svg' style='height: 3cm;'>
  <img alt='Graffiti' src='./static/graffiti.svg' style='height: 6.4cm; margin-left: 25px;  margin-bottom: 0; margin-top: 0;'>
  <h1 class='outlined' style='margin: 0 auto; padding: .5cm .5cm;'>เพย์จอยน์</h1>
  <p class='text-center' style='margin-bottom: 0; margin-top: 0;'>
    นิตยสารกะทัดรัดเรื่องเพย์จอยน์:
    <br />
    มันคืออะไร ทำไมเลิศ และทำงานอย่างไร
    <br />
    @satsie ☆ https://satsie.dev/zines
    <br />
    อัปเดตล่าสุด: JULY 2024
  </h3>
</zine-page>

<zine-page class='left'>
  <page-num>
    หน้า ๖ (6)
  </page-num>
  <p class='text-center' style='margin: .5cm auto; padding: 0 auto;'>
    มีข้อนำเสนอบิ๊พส์สำหรับเพย์จอยน์สามข้อ
  </p>
  <p
    class='text-center'
    style='border: 2px black dotted; border-radius: .5cm; margin: .25cm 1.5cm; padding: .25cm .5cm;'>
    1. บิ๊พ-79 บัสต้าเพย์ (คศ. 2018)
    <br />
    2. บิ๊พ-78 เพย์จอยน์ (คศ. 2019)
    <br />
    3. บิ๊พ-77 เพย์จอยน์วี2 (คศ. 2023)
  </p>
  <p class='text-small'>
    ที่ผ่านมาคุณต้องเปิดเซิร์ฟเว่อร์แน่นหนาปลอดภัยเพื่อใช้งานเพย์จอยน์
    -- สร้างอุปสรรคในการเข้าถึงอย่างมาก! BIP-77 เป็นข้อนำเสนอที่เจาะจงการใช้งานง่ายกว่าที่เคยเห็นทั้งหมด
    ในปัจจุบัน คุณแค่ใช้หน้าแอพพลิเคชั่นบนเว็บก็สามารถเชื่อมต่อกับ
    <strong>
      ผู้ให้บริการนามสงเคราะห์
    </strong>
    ในฐานะบุคคลที่สาม แบบไม่ฝากฝังความไว้ใจได้ ผู้ให้บริการนามสงเคราะห์
    (directory server) สามารถซัพพอร์ทคนใช้งานในมุมกว้างได้ และลดหย่อนความจำเป็น
    ของการรันเซอร์วิสรายบุคคล สำหรับผู้ใช้ทั่วไปที่อาจขาดความรู้เชิงเทคนิค
    นอกจากนั้นเราสามารถเพิ่มเซอร์วิสคั่นกลาง ระหว่างผู้ให้บริการและคนใช้ทั่วไป
    ด้วยพร็อกซี่หลงลืมไม่สอดส่อง เป็นตัวแทนการส่งสาร HTTP
    ไม่ให้ตามหาไอพีแอดเดรสของผู้ใช้บริการได้ และแต่ละฝ่ายผู้ใช้บริการ ก็ยังสามารถ
    ใช้งานกันในรูปแบบ asynchronous ไม่พร้อมกันได้อีกด้วย (ออนไลน์กันต่างคนต่างเวลา)
    เพราะว่าไดเร็กทอรีเซิร์ฟเวอร์สามารถรับมอบฉันทะในการส่งสาสน์ระหว่างผู้ใช้
    ท้ายสุดแล้ว บิ๊พ-77 ยังรองรับการเข้ารหัสตรวจสอบสิทธิ์อีกด้วย ผู้ใช้บริการจึงสามารถใช้ประโยชน์
    ของแบบร่างพึงประสงค์นี้ ในการรักษาความเป็นส่วนตัวของแต่ละบุคคล
    ไม่บีบรัดให้ผู้ใช้ลดหย่อนหรือละวาง ไพรเวซีและความปลอดภัยแต่เช่นใด
  </p>
</zine-page>

<zine-page class='right'>
  <page-num>
    หน้า ๓ (3)
  </page-num>
  <p style='text-align: left;'>
    โดยการใช้เพย์จอยน์ ผู้รับเสนออินพุทร่วมสร้างธุรกรรมได้ ถ้าหากบ๊อบ
    มีเหรียญบิทคอยน์จำนวน 5 BTC และต้องการใช้เหรียญนี้ตอบรับ
    ธุรกรรมเพย์จอยน์ หน้าตาธุรกรรมจะเป็น:
  </p>
  <table style='margin: 0 auto;'>
    <thead>
      <tr>
        <th>อินพุท</th>
        <th></th>
        <th style='text-align: right;'>เอาท์พุท</th>
      </tr>
    </thead>
    <tbody style='border: 1px solid;'>
      <tr>
        <td style='margin: 0 auto;'>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
        <td style='font-size: .48cm; transform: rotate(90deg) scale(1.6); white-space: nowrap;'>
          〰〰〰
        </td>
        <td style='margin: 0 auto;'>
          <img
            alt="Alice's Four BTC"
            src='./static/alice-four.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
      </tr>
      <tr>
        <td style='margin: 0 auto;'>
          <img
            alt="Bob's Five BTC"
            src='./static/bob-five.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
        <td style='font-size: .48cm; transform: rotate(90deg) scale(1.6); white-space: nowrap;'>
          〰〰〰
        </td>
        <td style='margin: 0 auto;'>
          <img
            alt="Bob's One BTC"
            src='./static/bob-six.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='bottom: 8cm; position: absolute; left: .8cm;'>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='bottom: 8cm; position: absolute; right: .8cm;'>
  </outlined-right-arrow>
  <p style='text-align: left;'>
    กรณีที่เห็นนี้ดีกว่าตรงไหน? ผลประโยชน์แรกเลยก็คือ <strong>สมรรถภาพเสกลลิ่ง</strong>
    โดยนิยามแล้ว เพย์จอยน์ ใช้การรวบมัดธุรกรรม บนปลายทางในทั้งสองกรณี บ๊อบมี 6 BTC เท่ากัน
    แต่มีผลต่างเล็กน้อยในการแสดงผลลัพธ์ กรณีแรกบ๊อบได้รับเหรียญ 1 BTC จากอลิซและ
    ถืออีกหนึ่งเหรียญจำนวน 5 BTC อยู่แล้ว ในกรณีเพย์จอยน์บ๊อบถือหนึ่งเหรียญจำนวน 6 BTC
  </p>
</zine-page>

<zine-page class='left'>
  <page-num>
    หน้า ๒ (2)
  </page-num>
  <br />
  <table class='contents-centered'>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.27cm; line-height: .06cm; opacity: .4; transform: translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～～～～～
      </td>
    </tr>
    <tr style='margin: auto 0;'>
      <td
        class='lean seamless'
        style='font-size: .72cm; line-height: .3cm; letter-spacing: -.27cm; opacity: .4; transform: rotate(90deg) translate(-6%);'
        >
        〜〜〜〜
      </td>
      <td class='lean seamless text-center' style='font-size: .36cm;'>
        เพย์จอยน์คือวิธีการรวบมัดธุรกรรม <bitcoin></bitcoin>
        แบบรักษาความเป็นส่วนตัว และประหยัดพื้นที่บล็อก
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; line-height: .3cm; letter-spacing: -.27cm; opacity: .4; transform: rotate(90deg) translate(-6%);'
        >
        〜〜〜〜
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.27cm; line-height: .06cm; opacity: .4; transform: translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～～～～～
      </td>
    </tr>
  </table>
  <p style='margin: .25cm 0; text-align: left;'>
    หวนนึกว่า:
  </p>
  <ol style='margin: 0 .75cm; text-align: left;'>
    <li><bitcoin></bitcoin> ใช้ระบอบเอาท์พุทธุรกรรมทอน (UTXO) และ</li>
    <li>เหรียญ (ข้อมูลป้อน และข้อมูลผลลัพธ์จากธุรกรรม) สามารถมีค่าเท่าไรก็ได้</li>
  </ol>
  <p style='margin: .25cm 0; text-align: left;'>
    สมมุติว่าอลิซมีบิทคอยน์จำนวน 5 BTC ในบัญชี และสร้างธุรกรรมส่ง 1 BTC ให้กับบ๊อบ
    ธุรกรรมที่ถูกสร้าง (tx) จะมีหน้าตาเช่นนี้:
  </p>
  <table style='margin: 0 auto;'>
    <thead>
      <tr>
        <th>อินพุท</th>
        <th></th>
        <th style='text-align: right;'>เอาท์พุท</th>
      </tr>
    </thead>
    <tbody style='border: 1px solid;'>
      <tr>
        <td style='margin: 0 auto;'>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
        <td style='font-size: .48cm; transform: rotate(90deg) scale(1.6); white-space: nowrap;'>
          〰〰〰
        </td>
        <td style='margin: 0 auto;'>
          <img
            alt="Alice's Four BTC"
            src='./static/alice-four.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
      </tr>
      <tr>
        <td style='margin: 0 auto;'>
          &nbsp;
        </td>
        <td style='font-size: .48cm; transform: rotate(90deg) scale(1.6); white-space: nowrap;'>
          〰〰〰
        </td>
        <td style='margin: 0 auto;'>
          <img
            alt="Bob's One BTC"
            src='./static/bob-one.th.svg'
            style='height: 2cm; object-fit: contain;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='bottom: 3cm; position: absolute; left: .8cm;'>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='bottom: 3cm; position: absolute; right: .8cm;'>
  </outlined-right-arrow>
</zine-page>

<zine-page class='right'>
  <page-num>
    7
  </page-num>
  <br />
  <table class='contents-centered' style='margin-left: 0; width: 75%;'>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.3cm; opacity: .4; transform: translate(-1.2%);'>
        ～～～～～～～～～～～～～～
      </td>
    </tr>
    <tr>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.3cm; opacity: .4; transform: rotate(-90deg) translate(-12%);'
        >
        〜〜〜
      </td>
      <td
        class='lean seamless'
        style='font-size: .4cm;'
        >
        BIP-77 ทำงานอย่างไร
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.3cm; opacity: .4; transform: rotate(-90deg) translate(-12%);'
        >
        〜〜〜
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.3cm; opacity: .4; transform: translate(-1.2%);'>
        ～～～～～～～～～～～～～～
      </td>
    </tr>
  </table>
  <p class='text-small' style='margin: 0 0 .25cm 2.5cm; padding: 0 .25cm;'>
    Bob: I want to start using payjoin. Can I have a mailbox?
  </p>
  <p class='text-small' style='border: 2px black dotted; border-radius: .5cm; margin: 0 0 0 2.5cm; padding: 0 .25cm;'>
    Directory Server: Sure! Here's your address
  </p>
  <p class='text-small' style='margin: .25cm 2.4cm .25cm 0;'>
    Bob: Hey Alice, anytime you want to send me BTC, use my
    mailbox so we can make a payjoin
  </p>
  <p class='text-small' style='border: 2px black solid; border-radius: .5cm; padding: 0 .25cm; margin: 0 2.5cm 0 .75cm;'>
    Alice: Ok. I want to send you BTC. I've started a transaction,
    and am putting it in your mailbox. Add your input and it will
    be a payjoin.
  </p>
  <p class='text-small' style='margin: 2.4cm 0 0 0;'>
    Bob: Look! I have a payjoin transaction in my mailbox!
    Let me add my input and put it back in the mailbox
  </p>
  <p class='text-small' style='border: 2px black solid; border-radius: .5cm; padding: 0 .25cm; margin: .25cm 2.4cm 0 .75cm;'>
    Alice: My turn to check the mailbox. The payjoin transaction
    is in there and it's complete. Now I can broadcast it to the
    network!
  </p>
  <img
    alt='Mailbox 01'
    src='./static/mailbox-01.svg'
    style='position: absolute; right: .6cm; top: .6cm; width: 2cm;'
    >
  <img
    alt='Grumpy'
    src='./static/grumpy.svg'
    style='position: absolute; left: .36cm; top: 2.8cm; transform: rotate(-15deg); width: 2cm;'
    >
  <img
    alt='Goth'
    src='./static/goth.svg'
    style='position: absolute; right: .36cm; top: 5cm; width: 2.4cm;'
    >
  <img
    alt='Bubble tail'
    src='./static/bubble-tail.svg'
    style='position: absolute; right: 1.9cm; top: 7cm; width: 1.2cm;'
    >
  <img
    alt='Grumpy again'
    src='./static/grumpy.svg'
    style='position: absolute; left: .36cm; top: 8.8cm; width: 2cm;'
    >
  <img
    alt='Pencil and paper'
    src='./static/pencil-and-paper.svg'
    style='position: absolute; left: 2cm; top: 9.6cm; transform: rotate(30deg); width: 1.2cm;'
    >
  <img
    alt='Mailbox 02'
    src='./static/mailbox-02.svg'
    style='position: absolute; left: 4.4cm; top: 8.8cm; width: 2cm;'
    >
  <img
    alt='Paper'
    src='./static/paper.svg'
    style='position: absolute; right: .6cm; top: 9.2cm; width: 1.6cm;'
    >
  <img
    alt='Arrow right'
    src='./static/arrow.svg'
    style='position: absolute; left: 3.2cm; top: 9.8cm; transform: scaleX(-1) rotate(-90deg); width: 1cm;'
    >
  <img
    alt='Arrow left'
    src='./static/arrow.svg'
    style='position: absolute; right: 2.4cm; top: 9cm; transform: rotate(-90deg); width: 1cm;'
    >
  <img
    alt='Goth again'
    src='./static/goth.svg'
    style='position: absolute; right: .2cm; bottom: .8cm; width: 2cm;'
    >
  <img
    alt='Bubble tail again'
    src='./static/bubble-tail.svg'
    style='position: absolute; right: 1.8cm; bottom: 2.2cm; width: 1.2cm; transform: scaleY(-1)'
    >
</zine-page>

<zine-page class='left'>
  <page-num>
    4
  </page-num>
  <br />
  <p>
    The way the 1 BTC from Alice was combined with Bob's
    existing 5 BTC is an example of
    <span style='font-weight: bold;'>
      coin consolidation
    </span>
    More coins = more fees, so it's best to minimize the
    number of coins in your wallet. Instead of using one
    tx to transfer BTC, and another to consolidate coins,
    payjoin lets you do both at once, increasing tx
    throughput! That's not all. What if Bob wants to use
    the BTC from Alice to pay his friend Charlie? Or
    maybe he wants to open a Lightning channel? Using a
    tx for extra stuff like this is called a
    <span style='font-weight: bold;'>tx cut-through.</span>
    By allowing
    additional inputs and outputs, payjoin lets you pack
    more activity into a tx. Alice was already going to
    send BTC to Bob. Payjoin is just a way to raise the
    tx throughput and save on fees that would have gone
    to creating additional txs. It's the
    <span style='text-decoration: underline'>
      simplest
    </span>
    way to do transaction
    batching between two people.
  </p>
</zine-page>

<zine-page class='right'>
  <page-num>
    5
  </page-num>
  <br />
  <h3 class='text-center' style='margin: .32cm 1cm;'>
    ☆ ความเป็นส่วนตัว ☆
  </h3>
  <p>
    Blockchain surveillance uses heuristics to make assumptions
    about the nature of a tx, including how much BTC was 
    transferred, how much the sender got back as change,
    and who owns which coins. The most common heuristic
    for tracking users is the assumption that all inputs
    belong to the sender.
  </p>
  <p>
    Payjoin lets senders and receivers work together in
    a way that breaks one or more of these heuristics.
    After Alice and Bob used payjoin, the assumption that
    all inputs came from Alice is no longer true. The tx
    looks the same as if Alice provided multiple inputs.
  </p>
  <table class='contents-centered'>
    <tr>
      <td>
        <small-splash-left></small-splash-left>
      </td>
      <td style='font-size: .4cm; letter-spacing: -.01cm; font-weight: 600;'>
        In this regard, payjoin instantly brings
        privacy to on-chain transactions, right
        at the moment of payment.
      </td>
      <td>
        <small-splash-right></small-splash-right>
      </td>
    </tr>
  </table>
</zine-page>