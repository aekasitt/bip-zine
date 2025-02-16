<zine-page class='left'>
  <page-num>
    8
  </page-num>
  <table class='contents-centered'>
    <tr>
      <td>
        <small-splash-left>
        </small-splash-left>
      </td>
      <td>
        <h2>
          Thanks for reading!
        </h2>
      </td>
      <td>
        <small-splash-right>
        </small-splash-right>
      </td>
    </tr>
  </table>
  <h3>
    Want to learn more?
  </h3>
  <p class='text-left'>
    <arrow-right class='first' />
    check out the complete list of BIPs:
    github.com/bitcoin/bips
  </p>
  <p class='text-left'>
    <arrow-right class='second' />
    start following the <bitcoin></bitcoin>
    dev mailing list. You'll be among the
    first to hear about new BIPs and updates
    to ones in progress
  </p>
  <br />
  <div class='squiggly squiggly-1'></div>
  <div class='squiggly squiggly-2'></div>
  <table>
    <tr>
      <td>
        <div class='x-small squiggly-vert squiggly-vert-1'></div>
        <div class='x-small squiggly-vert squiggly-vert-2'></div>
      </td>
      <td>
        <p class='text-center'>
          Still want more? Head over to 
          https://satsie.dev/bips
          <br />
          for additional resources
        </p>
      </td>
      <td>
        <div class='x-small squiggly-vert squiggly-vert-1'></div>
        <div class='x-small squiggly-vert squiggly-vert-2'></div>
      </td>
    </tr>
  </table>
  <div class='squiggly squiggly-1'></div>
  <div class='squiggly squiggly-2'></div>
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

<zine-page class='right'>
  <page-num>
    3
  </page-num>
  <p style='text-align: left;'>
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
        <td>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td>
          <img
            alt="Alice's Four BTC"
            src='./static/alice-four.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
      <tr>
        <td>
          <img
            alt="Bob's Five BTC"
            src='./static/bob-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            ></td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td>
          <img
            alt="Bob's One BTC"
            src='./static/bob-six.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='position: absolute; right: 7.2cm; top: 5.6cm; '>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='position: absolute; right: 1.2cm; top: 5.6cm;'>
  </outlined-right-arrow>
  <p style='text-align: left;'>
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
  <div class='squiggly squiggly-1'></div>
  <div class='squiggly squiggly-2'></div>
  <table>
    <tr>
      <td>
        <div class='medium squiggly-vert squiggly-vert-1'></div>
        <div class='medium squiggly-vert squiggly-vert-2'></div>
      </td>
      <td>
        <p>
          Payjoin is a technique for batching <bitcoin></bitcoin>
          transactions while preserving privacy and blockspace.
        </p>
      </td>
      <td>
        <div class='medium squiggly-vert squiggly-vert-1'></div>
        <div class='medium squiggly-vert squiggly-vert-2'></div>
      </td>
    </tr>
  </table>
  <div class='squiggly squiggly-1'></div>
  <div class='squiggly squiggly-2'></div>
  <p style='text-align: left;'>
    Recall that:
  </p>
  <ol style='text-align: left;'>
    <li><bitcoin></bitcoin> uses the UTXO model, and</li>
    <li>coins (transaction inputs and outputs) can be of any value</li>
  </ol>
  Pretend Alice has 5 BTC in her wallet and she sends 1 BTC to Bob.
  The transaction (tx) looks like this:
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
        <td>
          <img
            alt="Alice's Five BTC"
            src='./static/alice-five.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
        <td style='font-size: .48cm; letter-spacing: -.1cm; opacity: .6; transform: rotate(90deg);'>
          ∾∾∾∾∾∾∾∾∾∾∾
        </td>
        <td>
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
          ∾∾∾∾∾∾∾∾∾∾
        </td>
        <td>
          <img
            alt="Bob's One BTC"
            src='./static/bob-one.svg'
            style='object-fit: contain; width: 2.4cm;'
            >
        </td>
      </tr>
    </tbody>
  </table>
  <outlined-right-arrow class='first' style='bottom: 5cm; position: absolute; right: 7.2cm;'>
  </outlined-right-arrow>
  <outlined-right-arrow class='second' style='bottom: 5cm; position: absolute; right: 1.2cm;'>
  </outlined-right-arrow>
</zine-page>
