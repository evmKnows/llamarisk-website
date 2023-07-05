---
title: 'Asset Risk Assessment - Stasis (EURS)'
excerpt: 'This report was prepared to provide additional clarity on EURS, evaluate its status amid a rapidly changing regulatory environment, and reassess its soundness as an important euro stablecoin of the Curve ecosystem.'
coverImage: '/assets/blog/pixel.png'
date: '2023-03-09T05:35:07.322Z'
author:
  name: "0xValJohn"
  picture: '/assets/blog/authors/0xValJohn_avatar.jpeg'
ogImage:
  url: ''
---

## A look into Stasis and the EURS stablecoin

![](https://i.imgur.com/gdrYkVe.png)

# Useful links

* [Stasis website](https://stasis.net/) | [Twitter](https://twitter.com/stasisnet) | [Github](https://github.com/stasisnet) | [Medium](https://medium.com/stasis-blog) 
* [Daily statement, on-demand verifications, and annual audits](https://eurs.stasis.net/transparency/) 
* Audits: [Coinfabrik (June 2018)](https://blog.coinfabrik.com/stasis-token-smart-contract-audit/) | [Certik (April 2021)](https://www.certik.com/projects/stasis)
* Addresses: [EURS (Mainnet)](https://etherscan.io/address/0xdb25f211ab05b1c97d595516f45794528a807ad8) | [EURS (Polygon)](https://polygonscan.com/token/0xe111178a87a3bff0c8d18decba5798827539ae99) | [Treasury wallet (Mainnet)](https://etherscan.io/address/0x1bee4f735062cd00841d6997964f187f5f5f5ac9)
* Third parties: [EXT LTD](https://ext.com.cy/) |  [XNT LTD](https://xnt.mt/) |  [UAB NexPay](https://paynexpay.com/) |  [SCB AG](https://scb.io/)
* Curve pools: [EURS-USDC](https://curve.fi/#/ethereum/pools/eursusd/)  |  [3EURpool](https://curve.fi/#/ethereum/pools/factory-v2-66/)  | [EURS-sEUR](https://curve.fi/#/ethereum/pools/eurs/)


# Abstract

EURS is a euro stablecoin issued by Stasis, a digital currency company based in Malta. It is a significant token on Curve Finance, representing over 40% of all euro tokens, and is coupled with other assets such as USDC, EURT, agEUR & sEUR. As with any other centralized stablecoin, key challenges include its issuance and redemption mechanism, control of smart contracts, underlying assets, and overall regulatory compliance.

This report was prepared to provide additional clarity on EURS, evaluate its status amid a rapidly changing regulatory environment, and reassess its soundness as an important euro stablecoin of the Curve ecosystem.

Our investigation highlights significant risks with EURS, in particular notable flaws in how the controlling entity is governed. The main concerns are the following:

* an obscure corporate setup and unclear regulatory compliance with third parties in various jurisdictions across the EU,
* an accounting strategy that distorts the value of the underlying portfolio, resulting in a systematic asset–liability mismatch and making EURS prone to a liquidity crunch, and
* the undisclosed ownership of the multi-sigs controlling the token and treasury contracts.

Our recommendation is for the DAO to address these issues urgently with Stasis. Due to the above risks and the fact that it is possible to operate a EUR stablecoin with enough regulatory clarity (working examples include: EURe, EUROe and EUROC), we feel Stasis’ internal governance & corporate setup can and should be held to a higher standard.


# Key Findings

* EURS is a centralized euro stablecoin controlled by Stasis, a company registered in Malta and the Isle of Man under STSS Limited. It is the largest euro stablecoin with a supply of approx. 47m euros, and the one with the most token holders (≈ 5,000).
* Token supply (mint, burn, freeze, and transfer) is controlled via a 3-of-7 multi-sig whose signers are not publicly known. Authority over the signers is also undisclosed.
* Stasis claims that EURS is backed 1:1 by cash reserves and sovereign and corporate bonds. Our verification shows that assets are held with the following entities: EXT LTD (Cyprus), XNT LDT (Malta), and UAB NexPay (Lithuania).
* Although statements showing account holdings are provided, Stasis does not recognize unrealized P&L from daily variations of the underlying bond prices. Our analysis shows that all bonds most recently held had been trading at a significant discount compared to Stasis’s cost basis. This represented a plausible risk of insolvency in the event of a bank run. 
* Stasis voluntarily rebalanced to 100% cash accounts during the course of our investigations. Questions remain whether a cash infusion was required after the bond portfolio liquidation to maintain the EURS collateralization ratio. 
* Regulatory compliance of Stasis and its associated entities and partners remains to be determined. EURS submitted its registration application to the Malta Financial Services Authority (MFSA) to become registered as a Virtual Financial Asset Token Issuer. However, the current setup is unsustainable as Stasis does not have complete control over the e-money liquidity.

# Introduction

Numerous stablecoin projects have been conceptualized, explored, and deployed in recent years. They can generally be classified into one of three categories: fiat-redeemable, crypto-collateralized, or algorithmic. Of the three major stablecoin categories, fiat-redeemable stables issued by centralized custodials have historically enjoyed the most market dominance. This can be attributed to their high capital efficiency compared to crypto-backed stables and their greater stability assurances compared to algorithmic stables.

The stablecoin market today is vastly different from just a couple of years ago, with notorious failures (e.g. [Terra’s UST](https://www.coindesk.com/learn/the-fall-of-terra-a-timeline-of-the-meteoric-rise-and-crash-of-ust-and-luna/)) prompting increased regulatory scrutiny (e.g. [Paxos BUSD](https://www.coindesk.com/business/2023/02/13/paxos-to-stop-minting-stablecoin-busd-following-regulatory-action/)) and in some cases creating victims of adverse market or regulatory conditions (e.g. [EURR](https://www.coindesk.com/business/2023/01/10/euro-stablecoin-eurr-issuance-ceased/).

With regards to the US dollar, there are two clear market leaders vying for dominance: Tether-issued USDT and Circle’s USDC. The competitive landscape is less pronounced for the euro currency. The most prominent players, making up >80% of the euro stable market, are [EURS](https://etherscan.io/token/0xdb25f211ab05b1c97d595516f45794528a807ad8) (Stasis), [agEUR](https://etherscan.io/token/0x1a7e4e63778b4f12a199c062f3efdd288afcbce8) (Angle), [EURT](https://etherscan.io/token/0xC581b735A1688071A1746c968e0798D642EDE491) (Tether), [EUROC](https://etherscan.io/token/0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c) (Circle), and [cEUR](https://explorer.celo.org/mainnet/token/0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73/token-transfers) (Celo). This research will focus on EURS, a fiat-redeemable euro stablecoin issued by the Malta-based company Stasis (STSS Limited), and currently the largest euro stable by marketcap.

 The graph below accounts for the actual circulating supply of euro stables on Ethereum. cEUR (11m euro) has been excluded from this overview as it is mainly on the Celo chain.

![snapshot-1677539774663](https://github.com/vefunder/protocol-research-review/blob/main/articles/stasis_eurs/images/snapshot-1677539774663.png)


# Stasis and EURS

Stasis launched EURS in [June 2018](https://www.globenewswire.com/news-release/2018/07/04/1533269/0/en/STASIS-launches-EURS-a-stablecoin-backed-by-the-Euro.html), as an alternative to US dollar stablecoins, which may appeal to users seeking an alternative regulatory regime or who may wish to avoid the influence of the US Federal Reserve’s monetary policies. The Company is incorporated in the Isle of Man ([2017](https://opencorporates.com/companies/im/015541V)) and Malta ([2018](http://openleis.com/legal_entities/254900KCFJULGL20U419/STSS-Malta-Limited)), both under the name of STSS Limited.

## EURS as an Asset

EURS is an ERC20 token designed by the platform to mirror the price of the euro. Of the primary competitors in the euro stable market, EURS has both the longest history on Ethereum and the largest marketcap. Its closest competitors are the custodial stablecoins issued by Circle (EUROC) or Tether (EURT). As of the reporting time, EURS has approximately 47m in circulation, most of which are on the Ethereum mainnet.

Users are able to mint and redeem EURS through the [Stasis Wallet](https://eurs.stasis.net/wallet/) app thanks to service from [SCB AG](https://scb.io/), a third party exchange that conducts KYC and serves as an on/off-ramp for EURS. It involves a .1% conversion fee for amounts up to 1M euro, and .25% for amounts greater than that. 

![Screen Shot 2023-03-07 at 8 18 38 PM](https://user-images.githubusercontent.com/51072084/223618759-34bd1360-6694-4c17-b73f-25eee0bfcd70.png)
Source: [SCB purchases and sellback fees](https://scb.io/faq)

Stasis' website [claims](https://eurs.stasis.net/stablecoin/) to always back EURS 1:1 with actual euros in its reserve accounts. However, the [transparency reports](https://stasis.net/transparency/), issued on a quarterly basis, reveals the Stasis reserves to be a combination of cash and bond allocations.

## Main Liquidity and Integration

The majority of EURS liquidity is used in DeFi, mainly providing liquidity to Curve Finance, with a small portion being on centralized exchanges ([Bitfinex: EURS/USD](https://trading.bitfinex.com/t/EUS:USD?type=exchange), [Cex.io: EURS-EUR](https://cex.io/eurs-eur)). 44% of all circulating EURS are deposited into Curve.

EURS can also be borrowed or lent on [AAVE v3 Polygon](https://app.aave.com/reserve-overview/?underlyingAsset=0xe111178a87a3bff0c8d18decba5798827539ae99&marketName=proto_polygon_v3) (2.2m EURS supplied), and to a lesser extent on [Iron-bank mainnet](https://app.ib.xyz/markets/Ethereum/0xA8caeA564811af0e92b1E044f3eDd18Fa9a73E4F) (3k EUR supplied.)

Aside from DeFi applications, other large token holders include:
* [0x6F3F68525E5EdaD6F06f8b0EaE0DD7B9F695aF13](https://debank.com/profile/0x6f3f68525e5edad6f06f8b0eae0dd7b9f695af13) 8.7m EURS, unknown msig
* [0xCFB87039A1eDa5428e2c8386d31cCF121835eCDb](https://etherscan.io/address/0xcfb87039a1eda5428e2c8386d31ccf121835ecdb) 5.4m EURS, unknown EOA
* [0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf](https://etherscan.io/address/0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf) 2.3m EURS, Polygon bridge
* [0x0427933133113C016C398202352307539430c900](https://etherscan.io/address/0x0427933133113c016c398202352307539430c900) 1.2m EURS, unknown msig
* [0x2A02E533B3A5D6D9381D6243E509EE5d1A66046d](https://etherscan.io/address/0x2a02e533b3a5d6d9381d6243e509ee5d1a66046d) 760k EURS, unknown EOA

These token holders represent ~40% of the circulating EURS supply. The following shows the top EURS token holders. The EURS Treasury address is not included in assessment of circulating supply:

![Screen Shot 2023-03-08 at 3 25 50 PM](https://user-images.githubusercontent.com/51072084/223878097-d2b2f59f-ddf5-489f-b6ab-16695d1deb66.png)
Source: [Etherscan EURS token holder ranking](https://etherscan.io/token/0xdb25f211ab05b1c97d595516f45794528a807ad8#balances)

The main liquidity outside Ethereum mainnet is on Polygon (2.3m EUR) via a mainnet<>polygon bridge contract. Other chains (Arbitrum, xDAI, Algorand, XRP, and XDC Network) have negligible supply and are out of scope for this report.

## EURS on Curve

EURS became the [OG euro stable](https://gov.curve.fi/t/scip-18-seur-eurs-pool/1149) on Curve in a pool paired with Synthetix sEUR back in November 2020. In November 2021, three additional pools involving EURS received gauges including a 3EUR pool with agEUR and EURT, a EURS/USDC pool, and a EURS/2CRV pool deployed on Arbitrum. Several months later, a EURS/3CRV pool deployed to Polygon received a gauge. EURS has a long history with Curve, and has established itself as a main player in its euro markets.

### Major EURS Curve pools:

* [EURS-USDC ($29.8m  TVL)](https://etherscan.io/address/0x98a7f18d4e56cfe84e3d081b40001b3d5bd3eb8b) with 14.2m EURS
* [3EURpool ($7m TVL)](https://etherscan.io/address/0xb9446c4ef5ebe66268da6700d26f96273de3d571) with 3.9m EURS
* [EURS-sEUR ($4.6m TVL)](https://etherscan.io/address/0x0ce6a5ff5217e38315f87032cf90686c96627caa) with 2.7m EURS

EURS represents approximately 44% of all euro stablecoins present on Curve Finance.

![](https://i.imgur.com/nzhEWMX.png)


# Corporate Setup and System Architecture

The following diagram shows the entities and processes involved to issue and custody assets for EURS:

![](https://i.imgur.com/PZbOose.png)

## Corporate Structure

Stasis has an intricate corporate structure, with a network of parent companies, foundations, financial service providers, payment providers, and custodians spread across several jurisdictions within the European Union (EU).

The primary entity, STSS (Malta) Limited, was incorporated in Malta ([C 86272](https://registry.mbr.mt/ROC/index.jsp#/ROC/companiesReport.do?action=companyDetails&fKey=f06f3e75-1d07-4284-819f-21ae06b09676)) on May 11th, 2018. The parent company is STSS Limited ([015541V](https://services.gov.im/ded/services/companiesregistry/viewcompany.iom?Id=PAtaViVKGBsLfroPP%2fH4dQ%3d%3d)), registered in the Isle of Man. The ultimate parent is STSS Foundation, registered in the Isle of Man and managed by its council. 

## Team

The Company currently has approximately 20 employees, with the following directors:

* **[Gregory Klumov](https://www.linkedin.com/in/gregoryklumov/), CEO & Founder**: Founded an Internet Service Provider at 15, then moved to Finance with experience in alternative investment management.
* **[Vyacheslav Kim](https://www.linkedin.com/in/vvkim/), CFO**: Over 12 years of management experience in Strategic Management, Asset Restructuring, Corporate Development, and Finance. He also has a diversified background in communication with regional authorities and ministries.
* **[Dmitry Golubev](https://www.linkedin.com/in/dmitry-golubev-9942844/), CTO**: Graduated from Nizhny Novgorod State University in 2010 and is currently based in Russia. He previously worked at Netcracker and Orion Innovation.

## Third Parties used by Stasis:

Stasis’ primary payment provider is [SCB AG](https://scb.io/), a Swiss digital asset exchange that allows users to tokenize EUR into STASIS Euro (EURS) stablecoin backed by fiat euros in the Company’s accounts. Users can access service to acquire or redeem EURS from the [Stasis wallet](https://eurs.stasis.net/wallet/).

UAB NexPay is also a payment processing partner and a licensed cash reserve custodian for STSS Malta Limited.
Cash deposits are custodied by [UAB NexPay](https://paynexpay.com/), Electronic Money Institution, authorized by Central Bank of Lithuania, [license # LB000428](https://www.lb.lt/en/sfi-financial-market-participants/uab-nexpay).

Two companies custody investable assets, involving a portfolio of corporate and sovereign bonds:

* [EXT LTD](https://ext.com.cy/), Investment Services company licensed by Cyprus SEC, [license # 165/12](https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/37644/)
* [XNT LTD](https://xnt.mt/), Investment Services company licensed by MFSA, Malta, [Category 3 license](https://index.maltaemployers.com/en/malta-financial-services-authority-questions)

## EURS Issuance

EURS issuance is fully permissioned and said to be controlled by STSS LTD (Malta) previously by a [2-of-3 multi-sig contract](https://etherscan.io/address/0x2EbBbc541E8f8F24386FA319c79CedA0579f1Efb) until June 2021, and later upgraded to a [3-of-7 gnosis safe](https://app.safe.global/transactions/history?safe=eth:0x1bee4F735062CD00841d6997964F187f5f5F5Ac9). Although the identities of the signers are unknown, two of the three original signers are included in the updated multi-sig.

The on-ramp process is twofold:
1. A client makes a wire transfer to the Stasis specified IBAN account
2. Once it’s confirmed, the Company sends the equivalent amount of EURS stablecoin to the client’s blockchain address 

The issuance of EURS is performed via the 3-of-7 [Stasis treasury wallet](https://etherscan.io/address/0x1bee4f735062cd00841d6997964f187f5f5f5ac9). It holds surplus tokens that are not collateralized, as redeemed tokens are not burned but instead held in the treasury. As of the reporting time, it is estimated that the treasury has a surplus of approximately 77m EURS, which they intend to burn in Q2 if market conditions continue. The last time the treasury created new EURS was a tx for [10M EURS on March 3, 2022](https://etherscan.io/tx/0x087897d1a8bf119d94b4df34967585906271383be43ec2be6bb2ab51bf1baa9c). It has been about a year as of the writing of this report since EURS was last sent from the treasury.

### EURS Token contract owners

**Controlled by**: [Multisig contract](https://etherscan.io/address/0x2ebbbc541e8f8f24386fa319c79ceda0579f1efb) (based on sol wallet from Gav Wood)
> **From**: [June 22, 2018](https://etherscan.io/tx/0x29431e269f522f22f417696afecfb362c16f8dd7c606dfd9d1d703260e19edf8) - [June 28, 2021](https://dashboard.tenderly.co/tx/mainnet/0xa65564234ffe9ed2a12c73a87efe03ce8880d13d5939049c6ad77820268d8093?trace=0.1)
> 
> **Threshold**: 2/3
> 
> **Signers**:
> 
> [0xEeE27C94490162b9b9789B75e0B8a40457117707](https://etherscan.io/address/0xeee27c94490162b9b9789b75e0b8a40457117707)
> 
> [0x98CEE9817499595B45eCa740f7fC1da2F9F9280d](https://etherscan.io/address/0x98cee9817499595b45eca740f7fc1da2f9f9280d)
> 
> [0x70250fcFEf983C9b912c8EEFB7021B4b7baE836e](https://etherscan.io/address/0x70250fcfef983c9b912c8eefb7021b4b7bae836e)

**Controlled by**: [EURS Treasury Gnosis Safe](https://etherscan.io/address/0x1bee4f735062cd00841d6997964f187f5f5f5ac9)
> **From**: [June 28, 2021](https://dashboard.tenderly.co/tx/mainnet/0xa65564234ffe9ed2a12c73a87efe03ce8880d13d5939049c6ad77820268d8093?trace=0.1) - Present
>
> **Threshold**: 3/7
>
> **Signers**:
> 
> [0xEeE27C94490162b9b9789B75e0B8a40457117707](https://etherscan.io/address/0xeee27c94490162b9b9789b75e0b8a40457117707)
> 
> [0x98CEE9817499595B45eCa740f7fC1da2F9F9280d](https://etherscan.io/address/0x98CEE9817499595B45eCa740f7fC1da2F9F9280d)
> 
> [0x111b4772eFD733e7e504A0789df60AF6f2324684](https://etherscan.io/address/0x111b4772efd733e7e504a0789df60af6f2324684)
> 
> [0xF02674b1F0D181EcF345aE83Af471b0a3B740f73](https://etherscan.io/address/0xf02674b1f0d181ecf345ae83af471b0a3b740f73)
> 
> [0x3a136B05bb654a2E952ff76F611c1B54d30c5Ead](https://etherscan.io/address/0x3a136B05bb654a2E952ff76F611c1B54d30c5Ead)
> 
> [0x2123AC812Bb4f08dafbb17931f6843435e319DEE](https://etherscan.io/address/0x2123ac812bb4f08dafbb17931f6843435e319dee)
> 
> [0x558cC8752201b5F709f5d200A6F2256Dafc805CC](https://etherscan.io/address/0x558cc8752201b5f709f5d200a6f2256dafc805cc)

## Collateral backing EURS

EURS is said to be backed 1:1 by collateral held by various assets in reserve accounts, including cash and low credit risk (A+) bonds. Cash reserve reports are being [produced quarterly](https://stasis.net/verified-statements) by a third party (BDO Malta). As per Stasis’ [latest report from March 7](https://stasis-site.s3.amazonaws.com/transparency/2023/BDO_STSS-Malta_random-verification-report_2023-03-07.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230308%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230308T025625Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=5dc83afbeb26e7f30ca151d2f1eae10dcd483b8ea7b23cd903d504fac15cfe2d), a significant amount of assets are held with the following institutions: EXT LTD and XNT.

Stasis additionally provides [daily statements](https://stasis.net/daily-statements/) showing its cash balance. Funds are held with XNT LTD (Malta) are described in these statements.

Verified audit reports have also been issued annually:
[STSS-FS-year-2020](https://stasis-site.s3.amazonaws.com/transparency/2021/STSS-FS-year-2020-FV-BDO-Official.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230225%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230225T233717Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=86bbbeeb9d5a1bed4d37705f9a9fdea361e2ffb815b8dcb8906fc43e1f177c05) | [STSS-FS-year-2019](https://stasis-site.s3.amazonaws.com/transparency/2020/STSS-FS-year-2019-final-signed.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230225%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230225T233717Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=2866669f2e761a15a1105e18999845ad648ca787eae5c810325c88a59d6062f8) | [STSS-FS-year-2018](https://stasis-site.s3.amazonaws.com/transparency/2019/STSS-FS-year-2018-final-signed.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230225%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230225T233717Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=cebbd15b9e1bd586d8bdfa641713a6d68562eb198d91cec8a615c39bbd429101)

Note the most recent report from 2020. Although the audited annual reports and financial statements were provided previously, Stasis has yet to publish a report for the fiscal year 2021, which should be available by now. When questioned, the team neglected to explain besides to point out that the company is not obliged to be audited.

### Bond Portfolio

Until recently, a significant amount (>93% as per the [January 5th verified statement](https://stasis-site.s3.amazonaws.com/transparency/2023/BDO_STSS-Malta_random-verification-report_2023-01-05.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230308%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230308T025625Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=de8292ae3a738d8f025c0b470f80597b88adc7475e0a10d23e8ba000c6aff222)) of EURS collateral was backed by low interest bonds. 

**Recent bonds include:**
* [XS2413696761](https://cbonds.com/bonds/1178943/), 0.125% corporate bond (ING Groep N.V., Nov 2025)
* [XS2280845491](https://cbonds.com/bonds/914159/) 0% corporate bond (BMW Finance N.V, Jan 2026)
* [XS2068071641](https://cbonds.com/bonds/619289/) 0% corporate bond (Asian Development Bank, Oct 2029)
* [AT0000A2NW83](https://www.boerse-frankfurt.de/bond/at0000a2nw83-oesterreich-republik-0-000-21-31) 0% sovereign bond (Austria, Feb 2031)
* [FR0014002WK3](https://cbonds.com/bonds/989135/) 0% sovereign bond (France, Nov 2031)

Stasis provides a cost basis for the bonds they hold. However, our analysis shows that all bonds most recently held have been trading at a significant discount compared to Stasis’ cost basis.

![](https://i.imgur.com/4FK6hQo.png)

Since Stasis planned to hold the bonds until their maturity date, according to [IFRS 9](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/), they are categorized as Solely Payments of Principal and Interest (SPPI). Under these terms, the Company uses amortized cost of financial assets and has no financial obligations with inherent costs. Stasis has recently liquidated its entire bond portfolio during the time we have been sharing our research with their team. Nevertheless, we believe this accounting method represents a systematic asset–liability mismatch issue that requires active monitoring.

Stasis also claims they have been able to liquidate close to 50% of the bond portfolio in 2022, facing no issues converting bonds into cash. These claims have yet to be validated and would warrant further research as Stasis has not confirmed if the bonds were liquidated at or below PAR, therefore realizing the mark-to-market (MTM) losses.

## Bond Liquidation Q1 2023

At the time we began our research, the latest verified report was dated January 5th, 2023. On that date there were 50.9M EURS in circulation, roughly 48M backed by holdings in the MFSA bond investment account. This put the overall collateralization at just over 100% (according to the accounting method that recognizes the face value of the bond holdings). The following image shows the breakdown as of January 5th:

![](https://i.imgur.com/lg5AJC5.png)

Source: [January 5th verified statement](https://stasis-site.s3.amazonaws.com/transparency/2023/BDO_STSS-Malta_random-verification-report_2023-01-05.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230308%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230308T025625Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=de8292ae3a738d8f025c0b470f80597b88adc7475e0a10d23e8ba000c6aff222)

The latest report released on March 7th revealed that the entire bond account has recently been liquidated. The circulating supply of EURS has fallen slightly in the past few months to 45.55M EURS. Based on the accounting, the CR appears to be just over 100%. What remains unclear is if a cash infusion was required to cover any shortfall from the sale of assets. The following is the latest report from March 7th: 

![image](https://user-images.githubusercontent.com/51072084/223648650-c9a341ce-8b58-4196-8af4-43d0995d6e0c.png)

Source: [March 7th verified statement](https://stasis-site.s3.amazonaws.com/transparency/2023/BDO_STSS-Malta_random-verification-report_2023-03-07.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHZ3XKRZIWZ67L2Q%2F20230308%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20230308T025625Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=5dc83afbeb26e7f30ca151d2f1eae10dcd483b8ea7b23cd903d504fac15cfe2d)


# Risk Vectors

## Liquidity crunch

Our research found that with the recent bond allocation, it would have taken as little as one percent (1%) net withdrawal pressure to jeopardize EURS backing and make the collateral ratio dip under 1:1. While this has since been rectified, as Stasis has liquidated its bond portfolio, their accounting method does not recognize market risk of its investment accounts. Users should be vigilant when interpreting Stasis' accounting to identify risk of insolvency.

Below is a simulation based on Stasis’ self-disclosed assets on March 1st, 2023, including total cash reserves of €379,892 and bonds ref. XS2413696761, XS2280845491, XS2068071641, FR0014002WK3 and AT0000A2NW83. A 0.5% slippage is assumed to dispose of bonds, as liquidity for these assets can be restricted.

A FIAT redemption of over 25% would be catastrophic for EURS holders as realized losses would amount to €1M, far more than current cash reserves.

A liquidity crunch (bank run) may have been possible due to the long maturities of the bonds and their current market price being far below Stasis’ acquisition cost. Current macroeconomic conditions (rising inflation and rising global interest rates) could push bond prices further down. Thankfully, Stasis has alleviated immediate concerns and has rebalanced into all cash investment accounts in anticipation of continued adverse market conditions.

![](https://i.imgur.com/zjRrNSS.png)

## Smart Contract Risk

Smart Contract risk is low. EURS has undergone audit and the proxy contract has been live on Ethereum since [June, 2018](https://etherscan.io/tx/0xb6270a6707da34b048d245fef08bac198dfae729b0f14112a407e1d669ea005e). The current implementation has been live since [April 2021](https://etherscan.io/tx/0x5825493e1ca1df2f8955fc845e2d40892cf31eef5e35377f4c1fa3273323dc57). It has been continuously operating during that time without incident.

### SC Audit

Two audits ([Coinfabrik, June 2018](https://blog.coinfabrik.com/stasis-token-smart-contract-audit/) and [Certik, April 2021](https://www.certik.com/projects/stasis)) have been conducted on the smart contracts. Both only noted minor findings (token contract is fairly standard).

**EURS Token contract**

Proxy: [0xdb25f211ab05b1c97d595516f45794528a807ad8](https://etherscan.io/address/0xdb25f211ab05b1c97d595516f45794528a807ad8)
Current Implementation: [0x25d772b21b0e5197f2DC8169E3Aa976B16bE04aC](https://etherscan.io/address/0x25d772b21b0e5197f2dc8169e3aa976b16be04ac#code)

**Write functions**:

`approve`, `burnTokens` / `createTokens`, `delegatedTransfer`, `freezeTransfers` / `unfreezeTransfers`, `setFlags`, `setOwner`, `transfer`, `transferFrom`

## Governance Risk

EURS is centrally controlled by the issuer STSS LTD. The token and treasury contracts are controlled by a multi-sig for which Stasis has yet to confirm the reporting structure of the signers. The EURS owner was upgraded from a 2-of-3 to a [3-of-7 gnosis safe](https://app.safe.global/home?safe=eth:0x1bee4F735062CD00841d6997964F187f5f5F5Ac9) in June 2021, with 2 of the 3 original owner addresses included in the new multi-sig. 

The EURS token owner has the power to create and burn tokens, freeze and unfreeze token transfers, set a new owner, set fee parameters and a fee collector address, set flags for a given address (e.g. `BLACK_LIST_FLAG` prevents transfer to or from a blacklisted address), and set a delegate address that execute functions on behalf of the owner.

## Custody Risk

The corporate governance structure of Stasis is highly ambiguous, leaving the custody of both token supply and underlying assets uncertain. Although Stasis issues regular account statements verified by third parties on their [transparency page](https://stasis.net/transparency/), the details of the company's operations are opaque. 

For instance, the most recent quarterly report from March 7th reveals that Stasis' entire bond portfolio was liquidated, from a face value of ~48M euro. Due to adverse market conditions, the market value of the portfolio had markedly decreased since the original purchase. Although the report shows EURS to be fully collateralized, there was a transfer of 3M euro that appears to be a cash infusion. While we can only speculate on the source of funds (Stasis team neglected to comment on this point), it's possible Stasis has taken out a loan to cover a shortfall caused by their portfolio rebalancing. 

Although recent bond holdings had been trading at a discount to the company's cost basis, this was not reflected in the quarterly statements. This was allowed under [IFRS 9](https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/), categorized as Solely Payments of Principal and Interest (SPPI), since Stasis had planned to hold their bonds to maturity. Users should be wary of creative accounting practices and urge Stasis to improve its transparency reporting, as this sort of creative accounting can conceal the risk of insolvency from users.

## Regulatory risk

Further clarity is required from Stasis about their compliance with applicable laws, as well as the number of external entities they utilize.

Stasis claims they submitted a [MFSA application](https://www.mfsa.mt/our-work/authorisations-old/our-authorisation-process/) (Malta Financial Services Authority) earlier this year to prepare the company for the upcoming [MiCA regulation](https://www.mayerbrown.com/en/perspectives-events/publications/2022/12/eu-markets-in-crypto-assets-mica-regulation-expected-to-enter-into-force-in-early-2023). They expect to receive approval from MFSA in Q2 2023 and then apply for an e-money token license under MiCA regulatory regime once it comes into effect. However, these claims have not been validated.

Stasis' inability to meet the requirements under existing e-money regulations casts doubts on whether they will be capable under the upcoming MiCa regime. Their recent allocation to long-term bonds would not be compliant with MiCA/e-money regulations, precisely due to market risks highlighted in this report.

> EMIs may also be authorized to invest a portion of client funds in tradable, high-quality, and short-term securities. Treasuries and short-term, tradeable government debt could be allowed, in the presence of liquid secondary markets, as these would limit (but not eliminate) liquidity risks. In addition, this approach adds some market risk, as the value of these securities will fluctuate with market interest rates, although, given the short maturities, the fluctuation should be limited. **In light of these risks, EMIs that are allowed to invest in securities should be subject to more sophisticated risk management requirements (including a prohibition on the re-use or pledge of these securities), as well as prudential requirements that take into account market risk and/or limits.** Allowing EMIs to invest in short-term government securities could, to some extent, limit credit risks, as they generally have lower credit risk than commercial banks. Another advantage could be potentially higher returns compared to placing the EMIs in demand deposits at banks. However, these potential advantages should be carefully weighed against the additionally introduced liquidity and market risks.

Source: [E-Money: Prudential Supervision, Oversight, and User Protection ](https://www.elibrary.imf.org/view/journals/087/2021/027/article-A000-en.xml)

# Conclusion

Our investigation highlights several risks for Stasis, the EURS stablecoin, its holders, and associated assets in Curve pools. From a regulatory perspective, it remains unclear if Stasis’s current structure is fully compliant with applicable laws, especially given a rapidly changing regulatory environment and recent enforcement. It is evident that Stasis’ corporate structure with reliance on third party service providers is unsustainable, as it faces a variety of counterparty risks and does not appear to have complete control over e-money liquidity or underlying assets. Moreover, EURS holders may at some point become at risk of a liquidity crunch, given Stasis' opaque operations and misleading transparency reporting.

Our recommendation is to address these transparency issues urgently with Stasis. Due to the described risks and the fact that it is possible to operate a euro stablecoin with enough regulatory clarity (working examples include: EURe, EUROe, EUROC), we believe Stasis’ internal governance & corp setup justify a reevaluation of continued CRV gauge incentives. Our position is that Stasis should be willing to address the transparency concerns highlighted in this report if they wish to continue receiving incentives.

# References:

https://www.crunchbase.com/organization/stasis/company_overview/overview_timeline

https://www.allcryptowhitepapers.com/wp-content/uploads/2018/11/STASIS-WhitePaper-.pdf

https://wirexapp.com/blog/post/qanda-with-stasis-0516

https://cointelegraph.com/news/demand-for-widely-used-euro-stablecoin-is-huge-says-defi-expert

https://fortune.com/2022/07/08/euro-coin-euroc-circle-new-stablecoin-first-backed-by-euro/ 

https://defillama.com/stablecoins?pegtype=PEGGEDEUR

https://medium.com/e-money-com/eeur-stablecoin-unwind-cf945820fb3f
