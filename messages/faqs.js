const { clearChats, createEmbed } = require("../utilities.js");
module.exports = async (client, linksChannel) => {
  try {
    await clearChats(linksChannel);

    const faqs = [
      {
        name: "What is the max supply for DOGEC?",
        value: "210,000,000 DOGEC",
        inline: false,
      },
      {
        name: "How many coins are required for a masternode?",
        value: "15,000 DOGEC",
        inline: false,
      },
      {
        name: "How many coins are required for staking?",
        value: "There isn't a minimum amount",
        inline: false,
      },
      {
        name: "What is the average block time?",
        value: "1 minute",
        inline: false,
      },
      {
        name: "How long is the maturity time?",
        value: "Around an hour",
        inline: false,
      },
      { name: "What algo are you using?", value: "Quark", inline: false },
      {
        name: "Why is my wallet not staking?",
        value: "Make sure your wallet is synced and open.",
        inline: false,
      },
      {
        name: "Do locked MN coins stake?",
        value:
          "Coins locked in a masternode do not stake, however, rewards that you keep in your wallet do.",
        inline: false,
      },
      {
        name: "Where can I buy DOGEC?",
        value:
          "DOGEC is currently being traded on [Stakecube](http://stakecube.dogec.io/) and [Stex](http://stex.dogec.io/).",
        inline: false,
      },
      {
        name: "What is an Orphan block?",
        value:
          'Orphan blocks typically occur when two entities produce a new block at almost the same time. One makes it into the blockchain, and the other, the "orphan" does not.',
        inline: false,
      },
    ];

    const faqsMessage = createEmbed(
      "DogeCash FAQ",
      faqs,
      "This section will get edited as we get more of the same questions frequently asked"
    );

    linksChannel.send(faqsMessage);
  } catch (e) {
    console.log(e);
  }
};
