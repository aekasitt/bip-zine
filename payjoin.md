<zine-page class='left'>
  <page-num>
    8
  </page-num>
  <p style='font-size: 1.24rem; text-align: justify;'>
    At the time of writing, BIP-77 is still being finalized,
    and payjoin adoption is relatively low. However the 
    payjoin team has been hard at work on impressive new
    tools and docs. There's no time like the present to
    implement it and improve base layer tx!
  </p>
  <hr/>
  <p style='font-size: 1.24rem; text-align: justify;'>
    Payjoin is an elegant solution for increasing scalability
    and preserving privacy. It saves block space (lower fees
    for all!) and weaken blockchain surveillance heuristics.
    Even those that don't use it benefit, but it's a team
    effort! The advantages are proportional to the level of
    adoption. Everyone stands to gain from widespread payjoin
    use.
  </p>
  <hr/>
  <p class='text-center' style='font-size: 1.24rem;'>
    Thanks for reading! Ready to learn more?
    Want free copies of this and other zines? Visit
  </p>
  <table class='contents-centered'>
    <tr style='border: none; margin: auto 0;'>
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
      <td
        class='lean seamless'
        style='font-size: 1.24rem;'
        >
        https://satsie.dev/zines
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: rotate(90deg) translate(-12%);'
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
  <img alt="Satsie's Pocket Guide" src='./static/satsies-pocket-guide.svg' style='height: 120px;'>
  <img alt='Graffiti' src='./static/graffiti.svg' style='height: 200px; margin-left: 25px;  margin-bottom: 0; margin-top: 0;'>
  <h1 style='margin-bottom: 0; margin-left: auto; margin-right: auto; margin-top: 0;'>PAYJOIN</h1>
  <h3 style='margin-bottom: 0; margin-top: 0;'>
    A short zine about payjoin:
    <br />
    what is is, why it's cool and how it works
    <br />
    @satsie ☆ https://satsie.dev/zines
    <br />
    LAST UPDATED: JULY 2024
  </h3>
</zine-page>

<zine-page class='left'>
  <page-num>
    6
  </page-num>
  <p class='text-center' style='font-size: 1.24rem; margin: .5cm auto; padding: 0 auto;'>
    There are three payjoin BIPs
  </p>
  <p
    class='text-center'
    style='border: 2px black dotted; border-radius: .5cm; font-size: 1.24rem; margin: .25cm 1.5cm; padding: .25cm .5cm;'>
    1. BIP-79: Bustapay (2018)
    <br />
    2. BIP-78: Payjoin (2019)
    <br />
    3. BIP-77: Payjoin V2 (2023)
  </p>
  <p style='font-size: 1.24rem; letter-spacing: .1rem; text-align: justify;'>
    BIP-77 makes using payjoin easier than ever. Previously,
    you had to run a secure server -- a high barrier to entry!
    Now, web clients are used to access untrusted, 3rd party
    <span style='font-weight: bold;'>
      directory servers.
    </span>
    Directory servers support many users so individuals
    don't need to run their own. An Oblivious HTTP relay
    proxy server sits in front to protect user IPs.
    Participants can even work asynchronously (not being
    online at the same time) because the directory server
    buffers messages. BIP-77 also has authenticated
    encryption, allowing users to take advantage of this
    optimal architecture without compromising privacy or
    security.
  </p>
</zine-page>

<zine-page class='right'>
  <page-num>
    3
  </page-num>
  <p style='font-size: 1.24rem; letter-spacing: .1rem; text-align: left;'>
    With payjoin, the receiver also contributes an input. Let's
    say Bob already has 5 BTC in his wallet and he wants to use
    that in a payjoin tx. It would look like this:
  </p>
  <table style='margin: 0 auto; max-width: 60%;'>
    <thead>
      <tr>
        <th>INPUTS</th>
        <th></th>
        <th>OUTPUTS</th>
      </tr>
    </thead>
    <tbody style='border: 1px solid;'>
      <tr>
        <td style='margin: 0 auto; padding-right: 0;'>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td style='margin: 0 auto; padding-left: 0;'>
          <img
            alt="Alice's Four BTC"
            src='./static/alice-four.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
      <tr>
        <td style='margin: 0 auto; padding-right: 0;'>
          <img
            alt="Bob's Five BTC"
            src='./static/bob-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            ></td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td style='margin: 0 auto; padding-left: 0;'>
          <img
            alt="Bob's One BTC"
            src='./static/bob-six.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='bottom: 8.12cm; position: absolute; right: 7.2cm;'>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='bottom: 8.12cm; position: absolute; right: 1.2cm;'>
  </outlined-right-arrow>
  <p style='font-size: 1.24rem; letter-spacing: .1rem; text-align: left;'>
    So why is this good? The first benefit is <strong>scalability.</strong>
    By definition, payjoin does some tx batching. In both scenarios, Bob
    ends up with a total of 6 BTC, but there's a slight difference in how
    it's represented. In the 1st example, he has 1 BTC from Alice and the
    5 BTC he already had. With payjoin, he has a single 6 BTC.
  </p>
</zine-page>

<zine-page class='left'>
  <page-num>
    2
  </page-num>
  <table class='contents-centered'>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.27cm; opacity: .4; transform: scale(1.1) translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～～～
      </td>
    </tr>
    <tr style='margin: auto 0;'>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.27cm; opacity: .4; transform: rotate(-90deg) scale(1.2) translate(-5%);'
        >
        〜〜〜〜〜
      </td>
      <td class='lean seamless text-center' style='font-size: 1.2rem;'>
        Payjoin is a technique for batching <bitcoin></bitcoin>
        transactions while preserving privacy and blockspace.
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.27cm; opacity: .4; transform: rotate(90deg) scale(1.2) translate(-8%);'
        >
        〜〜〜〜〜
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.27cm; opacity: .4; transform: scale(1.1) translate(-1.2%);'
        >
        ～～～～～～～～～～～～～～～～
      </td>
    </tr>
  </table>
  <p style='font-size: 1.12rem; letter-spacing: .1rem; text-align: left;'>
    Recall that:
  </p>
  <ol style='font-size: 1.12rem; letter-spacing: .1rem; margin-left: 1cm; text-align: left;'>
    <li><bitcoin></bitcoin> uses the UTXO model, and</li>
    <li>coins (transaction inputs and outputs) can be of any value</li>
  </ol>
  <p style='font-size: 1.12rem; letter-spacing: .1rem; text-align: left;'>
    Pretend Alice has 5 BTC in her wallet and she sends 1 BTC to Bob.
    The transaction (tx) looks like this:
  </p>
  <table style='margin: 0 auto; max-width: 60%;'>
    <thead>
      <tr>
        <th>INPUTS</th>
        <th></th>
        <th>OUTPUTS</th>
      </tr>
    </thead>
    <tbody style='border: 1px solid;'>
      <tr>
        <td style='margin: 0 auto; padding-right: 0;'>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td style='margin: 0 auto; padding-left: 0;'>
          <img
            alt="Alice's Four BTC"
            src='./static/alice-four.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td style='margin: 0 auto; padding-left: 0;'>
          <img
            alt="Bob's One BTC"
            src='./static/bob-one.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='bottom: 2.4cm; position: absolute; right: 7.2cm;'>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='bottom: 2.4cm; position: absolute; right: 1.2cm;'>
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
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: translate(-1.2%);'>
        ～～～～～～～～～～～～～～
      </td>
    </tr>
    <tr>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: rotate(90deg) translate(-12%);'
        >
        〜〜〜
      </td>
      <td
        class='lean seamless'
        style='font-size: 1.12rem;'
        >
        How BIP-77 works
      </td>
      <td
        class='lean seamless'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: rotate(90deg) translate(-12%);'
        >
        〜〜〜
      </td>
    </tr>
    <tr class='lean'>
      <td
        class='lean seamless'
        colspan='3'
        style='font-size: .72cm; letter-spacing: -.32cm; opacity: .4; transform: translate(-1.2%);'>
        ～～～～～～～～～～～～～～
      </td>
    </tr>
  </table>
  <p style='font-size: 1rem; margin: 0 0 .25cm 2.5cm; padding: 0 .25cm;'>
    Bob: I want to start using payjoin. Can I have a mailbox?
  </p>
  <p style='border: 2px black dotted; border-radius: .5cm; font-size: 1rem;  margin: 0 0 0 2.5cm; padding: 0 .25cm;'>
    Directory Server: Sure! Here's your address
  </p>
  <p style='margin: .25cm 2.4cm .25cm 0;'>
    Bob: Hey Alice, anytime you want to send me BTC, use my
    mailbox so we can make a payjoin
  </p>
  <p style='border: 2px black solid; border-radius: .5cm; font-size: 1rem;  padding: 0 .25cm; margin: 0 2.5cm 0 .75cm;'>
    Alice: Ok. I want to send you BTC. I've started a transaction,
    and am putting it in your mailbox. Add your input and it will
    be a payjoin.
  </p>
  <p style='font-size: 1rem; margin: 2.4cm 0 0 0;'>
    Bob: Look! I have a payjoin transaction in my mailbox!
    Let me add my input and put it back in the mailbox
  </p>
  <p style='border: 2px black solid; border-radius: .5cm; font-size: 1rem; padding: 0 .25cm; margin: .25cm 2.4cm 0 .75cm;'>
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
    style='position: absolute; left: .36cm; top: 2.6cm; transform: rotate(-15deg); width: 2cm;'
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
  <p style='font-size: 1.24rem; letter-spacing: .1rem; text-align: justify;'>
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
  <h3 style='text-align: center'>
    ☆ Privacy ☆
  </h3>
  <p style='font-size: 1.24rem; text-align: justify;'>
    Blockchain surveillance uses heuristics to make assumptions
    about the nature of a tx, including how much BTC was 
    transferred, how much the sender got back as change,
    and who owns which coins. The most common heuristic
    for tracking users is the assumption that all inputs
    belong to the sender.
  </p>
  <p style='font-size: 1.24rem; text-align: justify;'>
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
      <td style='font-size: 1.24rem; font-weight: bold;'>
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