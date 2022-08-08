export async function graphQlToRest() {
	const response = await fetch("https://gateway-dev.crictracker.ml/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			query: `query GetHomePageArticle($input: getHomePageArticleInput) {
        getHomePageArticle(input: $input) {
          nTotal
          aResults {
            eType
            sName
            iSeriesId
            sSlug
            bScoreCard
            aArticle {
              sType
                _id
                sTitle
                sSubtitle
                sSrtTitle
                oSeo {
                  sSlug
                }
                sDescription
                oImg {
                  sUrl
                  sText
                  sCaption
                  sAttribute
                }
                nDuration
                dPublishDate
                oCategory {
                  sName
                  _id
                  oSeo {
                    sSlug
                  }
                }
                oTImg {
                  sUrl
                  sText
                  sCaption
                  sAttribute
                }
            }
          }
        }
      }`,
			variables: { input: { nSkip: 1, nLimit: 50 } },
		}),
	});
	const data = await response.json();
	return data;
}
