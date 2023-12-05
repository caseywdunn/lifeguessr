# lifeguessr

A game where you guess organisms in videos. For now the focus is on invertebrates.

Deployed at https://lifeguessr.netlify.app/ .

Use the [issue tracker](https://github.com/caseywdunn/lifeguessr/issues) to report bugs or suggest videos. Suggested videos should be in this json format:

```json
    {
        "url":"https:\/\/www.youtube.com\/embed\/dlqa1mZ_5pM",
        "start":119,
        "organism":"Holotheria",
        "ncbiTaxonId":7684,
        "ncbiTaxonString":"Metazoa; Eumetazoa; Bilateria; Deuterostomia; Echinodermata; Eleutherozoa; Echinozoa; Holothuroidea",
        "notes":null
    }
```

The fields are as follows:

* url: the url of the video. It should be a youtube embed url. It starts with `https:\/\/www.youtube.com\/embed\/` (notice the escaped slashes), followed by the video id. You can copy and paste this from the share link on youtube. For example, the share link for this video was https://www.youtube.com/watch?v=dlqa1mZ_5pM and I copied the `dlqa1mZ_5pM` to create the embed url.

* start: the number of seconds into the video where the organism appears. You can find this by pausing the video at the right time and looking at the time display, and converting to seconds. Note that the video will be covered until about 5 seconds after the start time to block the title and other information.

* organism: the name of the organism. This should be the scientific name.

* ncbiTaxonId: the NCBI taxon id for the organism. You can find this by searching for the organism on https://www.ncbi.nlm.nih.gov/taxonomy. For example, the NCBI taxon id for the sea cucumber *Holothuria forskali* is 72674.

* ncbiTaxonString: the NCBI taxon string for the organism. You can find this by searching for the organism on https://www.ncbi.nlm.nih.gov/taxonomy. For example, the NCBI taxon string for the sea cucumber *Holothuria forskali* is `Metazoa; Eumetazoa; Bilateria; Deuterostomia; Echinodermata; Eleutherozoa; Echinozoa; Holothuroidea; Aspidochirotacea; Aspidochirotida; Holothuriidae; Holothuria`. I just copy and paste it from Metazoa on.

* notes: any notes about the video. For example, if it is a larva you can note it here.