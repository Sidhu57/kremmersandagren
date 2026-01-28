import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import President from "@/assets/president.jpg";
import vPresident from "@/assets/v-president-clean.jpg";

const About = () => {
  const leaders = [
    {
      name: "D. Abraham Doss, M.A., ",
      role: "President",
      image: President,
      bio: "Leading the Kremmer Sandegren Foundation Pattukottai with unwavering commitment to grassroots development, women's empowerment, and sustainable livelihoods across rural Thanjavur district.",
    },
    {
      name: "M.Arokiya Leo",
      role: "Vice President",
      image: vPresident,
      bio: "Experienced professional managing SHG programs, child development initiatives, health camps, and agricultural training with participatory community engagement.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Full Page Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/[0.70]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section with Background Video */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-32" style={{height:'400px'}}>
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=1080&fit=crop"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent mb-4">
              About Us
            </h1>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-3">
              Learn about our journey, mission, and the dedicated team working to make a difference.
            </p>
            <div className="text-xs md:text-sm text-foreground/90 space-y-2 mt-6 text-left max-w-xl mx-auto pl-10">
              <p className="font-medium">Registration No. 5/1957 (Tanjore, 01-May-1957)</p>
              <p className="font-medium">Amended SL. 07/2015 (Trichy, 19-Nov-2015)</p>
              <p className="font-bold text-sm md:text-base">12A & 80G approved - 50% tax deduction eligible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story with Leadership */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Leadership Photos with Title */}
            <div className="relative mb-8">
              <div className="flex items-start justify-between gap-4">
                {/* President - Left Aligned */}
                <div className="flex flex-col items-start w-[15%] max-w-[120px]">
                  <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden w-full">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img
                        src={leaders[0].image}
                        alt={leaders[0].name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="text-[9px] font-bold mb-1 group-hover:text-primary transition-colors leading-tight whitespace-nowrap">
                        {leaders[0].name}
                      </h3>
                      <p className="text-[10px] font-medium text-secondary">{leaders[0].role}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Our Story Title - Center */}
                <div className="flex-1 flex flex-col items-center justify-center pt-12">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3" />
                  <h2 className="text-xl md:text-2xl font-bold text-center">Our Story</h2>
                </div>

                {/* Vice President - Right Aligned */}
                <div className="flex flex-col items-end w-[15%] max-w-[120px]">
                  <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden w-full">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img
                        src={leaders[1].image}
                        alt={leaders[1].name}
                        className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-2">
                      <h3 className="text-[9px] font-bold mb-1 group-hover:text-primary transition-colors leading-tight whitespace-nowrap">
                        {leaders[1].name}
                      </h3>
                      <p className="text-[10px] font-medium text-secondary">{leaders[1].role}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Our Story Content - Updated with Original Content */}
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <div className="space-y-8 text-muted-foreground leading-relaxed text-sm md:text-base">
                {/* Title */}
                 <h3 className="text-lg font-bold text-primary">
                  For KREMMER SANDEGREN FOUNDATION (KSF)
                  </h3>
                  {/* Registration Info */}
                  <div className="space-y-2 font-semibold">
                    <p>
                      KSF – A Lutheran Christian Evangelical Missionary Service in India
                      </p>
                      <p>
                        Registered under Societies Registration Act 1860,
                        Madras Act (Madras Amendment) Act XXIV of 1954
                        </p>
                        <p>
                        Regn. No: 5/1957 | Dt. 1st May 1957 | Founded on 25th March 1957
                        </p>
                        </div>
                        {/* Founder */}
                        <div className="space-y-1 font-semibold">
                        <p className="uppercase tracking-wide">Founder</p>
                        <p>Indian Born Swedish Missionary</p>
                        <p>Rev. Fr. J. Sandegren</p>
                        </div>
                        {/* Previous Leadership */}
                        <div className="space-y-1 font-semibold">
                          <p className="uppercase tracking-wide">First Indian Successor & Dean</p>
                          <p>Rev. A. Dharmaraj</p>
                          <p>S/o. Antonysamy Pillai</p>
                          </div>
                          {/* Present Leadership */}
                          <div className="space-y-1 font-semibold">
                            <p className="uppercase tracking-wide">Present Leadership</p>
                            <p>Rev. D. Abraham Doss, M.A.</p>
                            <p>President, KSF | S/o. A. Dharmaraj</p>
                            <p>Mr. M. Arockiya Leo</p>
                            <p>Vice President, KSF | S/o. Mariyam Soosai</p>
                            </div>
                            {/* Address */}
                            <div className="space-y-1 font-semibold">
                              <p className="uppercase tracking-wide">Administrative Office</p>
                              <p>Previously at Leo Lodge, Pattukottai</p>
                              <p>Now functioning at:</p>
                              <p>No: 16, Bishop Tank Street</p>
                              <p>Puthur, Trichy – 620 017</p>
                              </div>
                              </div>


              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">PREFACE</h3>
              <p className="font-semibold">
                The missionary foundation namely KREMMER SANDEGREN FOUNDATION (in short "KSF") was formed in the year 1957 by Indian-born Swedish missionary Rev. Fr. J. Sandegren and his brother Rev. Paul Sandegren with a vision of doing divine and social services in India.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">CHRISTIANITY, FUNCTIONS OF MISSIONARIES, GERMAN-SWEDISH MISSIONARIES, WORKS OF FOUNDERS OF KSF IN TAMIL NADU</h3>
              <p className="font-semibold">
                In the 16th Century, progressive religious movements in Europe erupted in the form of <strong>PROTESTANT REFORMATION</strong> against Roman Catholicism. Rev. Martin Luther, a Catholic clergyman, started the Reformation in Germany which spread to other parts of Europe and led to the division of Christianity into Roman Catholicism and Protestant Church. In England, the Protestant Reformation was started by Queen Elizabeth herself and was named as <strong>ANGLICAN CHURCH</strong>. The Protestant Church differed from the Roman Catholic Church in mainly two ways:  
                1. Except Jesus Christ, no worship of subsidiary deities such as Mother Mary, Joseph and other saints like St. Antony etc., was allowed.  
                2. Clergymen were allowed to marry and raise families.
              </p>
              <p className="font-semibold">
                The Protestant Church also wanted to indulge in evangelism, i.e., spread of Christianity in other nations. Protestant clergymen from many European countries such as Germany, England, Denmark, Sweden, etc. went to various Indian nations and spread Christianity in remunerative influential families.
              </p>
              <p className="font-semibold">
                In Sweden also, they practiced evangelical missionary activities:
              </p>
              <ol className="list-decimal ml-6 space-y-2 font-semibold">
                <li>The foreign missionaries, Rev. Johannes Sandegren and Rev. Paul Sandegren were the third generation Swedish missionaries.</li>
                <li>One Carl Fredrik Kremmer was born in Germany and he started <strong>LEIPZIG SOCIETY</strong> (with roots in Germany) in India in 1846-1906 which was later named as <strong>LEIPZIG EVANGELICAL LUTHERAN MISSION (LELM)</strong>.</li>
                <li>His eldest daughter Fredrik Theodora (second generation) married a missionary from Sweden, Carl Jacob Sandegren. Thereafter his arrival in India in 1869, <strong>Church of Swedish Mission (CSM)</strong> was formed in 1874 by both Fredrik Theodora and Carl Jacob Sandegren.</li>
                <li>Carl Jacob Sandegren and Fredrik Theodora came from the link of Leipzig Society as well as Church of Swedish Mission. Their children worked as missionaries in India.</li>
                <li>Due to the ancestral links of their parents and grandfathers, Johannes Halmar Theodora Sandegren was the Secretary of Church of Swedish Mission and later Kremmer Sandegren Foundation was formed out of the ancestral links of Leipzig Society of Germany and Church of Swedish Mission formed by Rev. Johannes Sandegren and Rev. Paul Sandegren.</li>
                <li>The object of the LELM and CSM Foundations shall be self-financing and spiritual life to encourage, start and maintain Christian services in India on educational and medical lines in the spirit of the faith of Rev. Martin Luther.</li>
              </ol>
              <p className="font-semibold">
                The KSF foundation was also founded for the same reason and registered under Societies Act 1860 and Amended Act XXIV of 1954 with Sl. No: 5 in 1957 with Headquarters at Pattukottai in Tanjore District Registrar Office. Later the headquarters was shifted to Trichy.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">FAMILY TREE OF KSF FOUNDER REV. FR. SANDEGREN</h3>
              <p className="font-semibold">
                7. The missionary of the Church of Sweden Mission, Carl Jacob Sandegren, was born at Masinge in Sweden on 1st October 1841, studied in Sweden and on 17th November 1869, arrived in India. At that time, missionary Rev. Carl Fredrik Kremmer (German origin) was the Pastor in Chennai. Rev. C.J. Sandegren stayed with him and served the church. He married Miss Theodora Kremmer (born in 1854), daughter of Rev. Carl Fredrik Kremmer, on 27/12/1874.
              </p>
              <p className="font-semibold">
                8. This marriage gained significance since it helped the Church of Sweden Mission (Sweden) and Leipzig Evangelical Lutheran Mission (German) work together.
              </p>
              <p className="font-semibold">
                9. Out of the wedlock, Carl Jacob Sandegren and Theodora Kremmer begot children as stated below:  
                &nbsp;&nbsp;&nbsp;1) Rev. Carl Sandegren - Mrs. Frieda Sandegren  
                &nbsp;&nbsp;&nbsp;2) Mr. Herman Andreas Sandegren, [Wife: Elisabeth Ahlgren]  
                &nbsp;&nbsp;&nbsp;3) Rev. Johannes Halmar Sandegren/KSF [20/11/1883] [Wife: Ingrid Ahlstrand]  
                &nbsp;&nbsp;&nbsp;4) Rev. Paul Harald Alvin Sandegren/KSF [27/08/1887] [Wife: Ingrid Soderberg]  
                &nbsp;&nbsp;&nbsp;5) Rev. Herman Sandegren - Mrs. Ebba Sandegren  
                &nbsp;&nbsp;&nbsp;6) Ms. Piroska Sandegren
              </p>
              <p className="font-semibold">
                10. Carl Jacob Sandegren and Theodora Kremmer assumed the responsibility of discharging evangelical and social works in Coimbatore, Madurai, Virudunagar and Sirkazhi. Between 1901 and 1915, Carl Jacob Sandegren was President of Church of Sweden Mission Council in India (CSM) which was registered as a Society under The Societies Registration Act 1860 with No. 4/1935-36 with the Registrar of Societies, Trichinopoly. After a long selfless service, he died in Madras in 1929 and was buried at Tranquebar. His wife died before him at Tranquebar (Tharangambadi) on 24/12/1923.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">FORMATION OF KSF AND ITS DESCENDANTS</h3>
              
              <h4 className="text-md font-bold mt-4 mb-2 text-secondary">1. REV. FR. J. SANDEGREN (20-11-1883 to 15-11-1962)</h4>
              <p className="font-semibold">
                The life of Rt. Rev. J. Sandegren may be divided into two parts:  
                i. Till His Retirement  
                ii. After His Retirement
              </p>
              
              <p className="font-bold mt-3">TILL HIS RETIREMENT</p>
              <ol className="list-decimal ml-6 space-y-2 font-semibold">
                <li>John Sandegren was born in Madurai on 20th November 1883 to Carl Jacob Sandegren and Theodora Kremmer.</li>
                <li>John Sandegren was ordained a priest in Vasteras (Sweden) in 1906 and in 1907 went back to India as a missionary.</li>
                <li>In 1913 (20/06/1913), he married Ingrid Ahlstrand in Lutheran Mission Church, Virudhupati (now Virudhunagar).</li>
                <li>In 1915, he was back in Sweden and became licentiate of philosophy in Sanskrit and religious history.</li>
                <li>In India, where he subsequently worked as "Vekersam" (Swedish Language - meaning Trainer) in Madurai.</li>
                <li>He took the initiative for writing a COMMON PRAYER BOOK in 1926 (many later editions), "Cantica Evangelica", and a common liturgy.</li>
                <li>In 1927, he took the initiative to the founding of Theological College "Gurukul" in Madras, where he became Superintendent.</li>
                <li>A significant effort he made to strengthen and unify the various Lutheran Churches in India and he took the initiative to "The Federation of the Evangelical Lutheran Church in India" (FELCI 1928), where he managed one of such church federations in India with various countries' missions and organizations included in that.</li>
                <li>In 1932, he became Teol. HC of University of Rostock, Germany.</li>
                <li>In 1934, he was elected as 3rd Bishop of Tranquebar in Tamil Evangelical Lutheran Church (Thamil Suvesesha Lutheran Thiruchabai) (Now TELC) and got Emeritus status (Emeritus means retired Bishop) in 1956. He was elected as the President of mission council and elected as the third Bishop of TELC from 1934 to 1956.</li>
                <li>He got Emeritus status at the age of 73.</li>
              </ol>

              <p className="font-bold mt-4">AFTER RETIREMENT - FOUNDATION OF KSF - A NEW EVANGELICAL LUTHERAN MISSIONARY ORGANIZATION IN THE NAME OF HIS PARENTS</p>
              <p className="font-semibold">
                12) The Sandegren Family was one of the richest families in Sweden. As well as he was a Doctor in Theology and having many kinds of earning sources including from his Professor Job in University of Rostock, Germany. Out of earnings from the said sources, he had purchased many immovable properties all over the world including India.
              </p>
              <p className="font-semibold">
                13) After Independence of India and attainment of Republic, many Europeans who were in missionary services in India turned back to their own countries for many reasons. But Bishop Emeritus J. Sandegren and his descendants did not go back to Sweden. At the time of retirement of Bishop Emeritus J. Sandegren, most of the regions in India including Tamil Nadu remained vacant of Protestant Pastorates and had lack of men to do missionary activities and its allied service.
              </p>

              <p className="font-bold mt-4">FORMATION OF KSF</p>
              <p className="font-semibold">
                14) Hence, with intent to continue Lutheran Missionary services until his lifetime and for its continuance by his descendants, the Bishop Emeritus J. Sandegren founded an Evangelical Lutheran Missionary Foundation in the name of "Kremmer Sandegren Foundation" and registered the same under Societies Registration Act 1860 and the Amended Act (XXIV/1954) bearing Regn. No. 5/1957 for the purpose of continuing missionary services in India by himself and with his brother Paul Sandegren, his family members and his descendants hereditarily.
              </p>
              <p className="font-semibold">
                15) The Bishop Emeritus J. Sandegren named the missionary foundation in memory of his beloved father and mother, namely Carl Jacob Sandegren and Theodora Kremmer, by combining their names, as well as to protect and ensure continuous management of the properties purchased by him alone or in India by himself and his descendant family members later on after his death.
              </p>
              <p className="font-semibold">
                16) As per its Bylaws, the Foundation consisted of living descendants of Carl Jacob Sandegren (+1939) and Theodora Kremmer (+1923) all over India:  
                &nbsp;&nbsp;&nbsp;i. Hereditary Head of the Sandegren family in Sweden, the President of the Sandegren Family Association, Sweden, and  
                &nbsp;&nbsp;&nbsp;ii. Such other persons whom the council elects for certain periods.
              </p>
              <p className="font-semibold">
                17) There shall be a President and Dean of the Council, the latter being the Executive Officer of the Foundation.
              </p>
              <p className="font-semibold">
                18) At the time of establishment, Bishop Emeritus J. Sandegren was its President; his brother Rev. Paul Sandegren was its Dean.
              </p>
              <p className="font-semibold">
                19) As per its bylaws, all the property of the society, movable and immovable, shall vest in the council and all documents relating to and affecting the properties of the society shall be taken and stand in the name of the society.
              </p>
              <p className="font-semibold">
                20) The Dean for the time being or other person or persons specially appointed by the council may sue or be sued, or acquire or mortgage, lease or otherwise transfer or deal with the properties of the society, or receive government or other grants on behalf of the society, and shall execute all documents on behalf of the society.
              </p>
              <p className="font-semibold">
                21) After assuming charge as President of Kremmer Sandegren Foundation, the Bishop Emeritus J. Sandegren continued and performed his Lutheran Missionary Services to the Tamils and Indians separately until his death. He died on 15th November 1962 in Uppsala, Sweden, at the age of 79.
              </p>
              <p className="font-semibold">
                22) He was doing Lutheran ministerial services to the people under the name of Kremmer Sandegren Foundation (hereinafter called shortly "KSF") after his retirement as Bishop from TELC till his death, for six continuous years.
              </p>
              <p className="font-semibold">
                23) Here it is pertinent to state that the Bishop Emeritus J. Sandegren not only rendered service on behalf of Swedish Church Council but also worked as elected Bishop of ELCT [Now TELC] from 1934 to 1956 during Pre-Independence, World War-II and for few years after Independence.
              </p>
              <p className="font-semibold">
                24) After formation of KSF, J. Sandegren dedicated himself to the foundation and contributed his valuable service till his death.
              </p>

              <h4 className="text-md font-bold mt-4 mb-2 text-secondary">2. REV. PAUL SANDEGREN</h4>
              <p className="font-semibold">
                25) Paul Sandegren was born on 27/08/1887. He was ordained a priest in 1913. He worked as Missionary in South India from 1915 to 1923 in various places. Kallar Community in Tamil Nadu were notified as Criminal Tribes. Paul Sandegren fought against this discrimination, worked together with them for their reclamation. He built many churches during this period.
              </p>
              <p className="font-semibold">
                26) After retirement of his brother J. Sandegren from TELC, he joined together with him in Kremmer Sandegren Foundation and continued his missionary services till his eternal rest on 30/07/1972.
              </p>

              <h4 className="text-md font-bold mt-4 mb-2 text-secondary">3. SVEN SANDEGREN</h4>
              <p className="font-semibold">
                27) After the death of Rev. Paul Sandegren, Rev. Sven Sandegren (S/o J. Sandegren - Founder KSF) taken charge of KSF and continued his service as the descendant of Sandegren as per the bylaws of Kremmer Sandegren Foundation.
              </p>
              <p className="font-semibold">
                28) During his visit to Sweden, he fell down ill, and was not able to return and resume his services. At the time of leaving India, Sven Sandegren authorized his disciple Mr. A. Dharmaraj to take care of the KSF and manage its properties as per its bylaws.
              </p>

              <h4 className="text-md font-bold mt-4 mb-2 text-secondary">4. REV. A. DHARMARAJ (First Elected Indian Dean)</h4>
              <p className="font-semibold">
                29) Accordingly, Mr. Dharmaraj took the responsibility of KSF and began to manage KSF and render missionary services. After the death of Sven Sandegren, Mr. A. Dharmaraj was elected as President Cum Dean of Kremmer Sandegren Foundation and assumed charges as per the bylaws of Kremmer Sandegren Foundation. Rev. A. Dharmaraj was the first elected non-Swedish Indian Dean cum President of KSF and rendered missionary services with the blessings and consent of KSF Family members.
              </p>

              <h4 className="text-md font-bold mt-4 mb-2 text-secondary">5. PRESENT TITLE HOLDER OF KSF</h4>
              <p className="font-semibold">
                30) Presently, after the demise of Mr. A. Dharmaraj S/o. Antonysamy Pillai, his son Mr. D. Abraham Doss, was elected as the President of Kremmer Sandegren Foundation, and Mr. D. Arulraj, S/o. Divyanatha Pillai, was elected as the Secretary and its Chief Property Officer. They were duly elected to the governing body as per The Tamil Nadu Societies Registration Act 1975 for KREMMER SANDEGREN FOUNDATION with Regn. No. 5/1957, Dt. 1st May 1957 (Founded on 25th March 1957).
              </p>
              <p className="font-semibold">
                31) Here it is necessary to repeat that as per the bylaws of KSF:  
                - All the property of the society, movable and immovable, shall vest in the council  
                - All documents relating to and affecting the properties of the society shall be taken and will stand in the name of the society  
                - The Dean for the time being or other person or persons specially appointed by the council may sue or be sued, or acquire mortgage, lease or otherwise transfer or deal with the properties of the society, receive government or other grants on behalf of the society and shall execute all documents on behalf of the society.
              </p>
              <p className="font-semibold">
                32) Thus, the present elected council of KSF have every right to function and operate the missionary body, continue its services, manage its properties purchased by them or their predecessors, founder, co-founder, and can lawfully deal with its properties and execute deeds on behalf of KSF.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">AMALGAMATION OF LELM WITH CSM</h3>
              <p className="font-semibold">
                33) The founders of LEIPZIG EVANGELICAL LUTHERAN MISSION (LELM), due to their close association with Church of Sweden Mission and in their desire to return to their native land, resolved to merge LELM with Church of Sweden Mission. In the year 1917, both organizations were amalgamated with the name "Church of Sweden Mission".
              </p>
              <p className="font-semibold">
                34) In the meanwhile, some foreign missionaries who were aged, running "Church of Sweden Mission" wanted to return to their motherland, and they came forward to merge the mission with Kremmer Sandegren Foundation due to the ancient links of Germany and Swedish family origin of the Founders of both Organizations. As a result, "Church of Sweden Mission" (CSM) No. 4/35-36 was amalgamated with "Kremmer Sandegren Foundation" (KSF) in 2005 by Special General Body Resolution dated 15-12-2005.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">SHORT HISTORY OF AMALGAMATION</h3>
              <p className="font-semibold">
                35) As above enumerated, "LEIPZIG EVANGELICAL LUTHERAN MISSION" (LELM) was amalgamated with "CHURCH OF SWEDEN MISSION" (CSM) on 16.05.1917 [Vide:  
                (1) Agreement between the Collegium at Leipzig and the Church of Sweden Mission Home Board at Stockholm dated 07.10.1915,  
                (2) G.O. No. 369 dated 28.02.1916 licensing the transfer of Property effected by Hermannsburg Evangelical Lutheran Mission and the Leipzig Evangelical Lutheran Mission to the Evangelical Lutheran Joint Synod of Ohio and other States and the Church of Sweden Mission respectively on certain conditions,  
                (3) G.O. No. 587 Public Dept. dated 28.03.1916, and  
                (4) G.O. No. 1147 Public Dept. dated 14.06.1916] and consequently the properties of the "LEIPZIG EVANGELICAL LUTHERAN MISSION" (LELM) were transferred to the "CHURCH OF SWEDEN MISSION" (CSM).
              </p>
              <p className="font-semibold">
                Later, "CHURCH OF SWEDEN MISSION" (CSM) was duly registered as a society under The Societies Registration Act 1860 with Regn. No. 4/35-36 with the Registrar of Societies, Trichirapalli.
              </p>
              <p className="font-semibold">
                In the meanwhile, a society called "KREMMER SANDEGREN FOUNDATION" (KSF) was founded by Rev. J. Sandegren and Rev. Paul Sandegren in memory of their parents, Theodora Kremmer, their mother and their father Carl Jacob Sandegren, who originally formed the "CHURCH OF SWEDEN MISSION" (CSM) in India. The new organization "KREMMER SANDEGREN FOUNDATION" (KSF) was registered under the Indian Societies Registration Act 1860 further amended by the Madras Act XXIV of 1954 with Regn. No. 5/1957 under Certificate of Incorporation dated 06-05-1957 issued by the District Registrar of Societies, Tanjore, with Headquarters at Pattukkottai and later moved to Trichy from where it is operating now.
              </p>
              <p className="font-semibold">
                Subsequently, "Church of Sweden Mission" (CSM) No. 4/35-36 was amalgamated with "Kremmer Sandegren Foundation" (KSF) in 2005 by Special General Body Resolution dated 15-12-2005. Later, the Kodaikanal District Munsif Court in its Judgment and Order dated 22-12-2014 has declared the amalgamation of the "Church of Sweden Mission" (CSM) with the "Kremmer Sandegren Foundation" (KSF) to be final and the Resolution of the amalgamated Kremmer Sandegren Foundation (KSF) approving of the amalgamation of the "Church of Sweden Mission" (CSM) with the Kremmer Sandegren Foundation (KSF) has been approved by the District Registrar of Societies, Tiruchirapalli vide his SL. No. 07/2015 in filing dated 19-11-2015.
              </p>
              <p className="font-semibold">
                Presently, "Kremmer Sandegren Foundation" (KSF) is operating with its Headquarters at No.16, St. John Church Complex, Rockins Road, Tiruchirapalli-1.
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3 text-primary">CONCLUSION AND OPINION</h3>
              <p className="font-semibold">
                36) I have perused all the records of KSF shown as Annexure I and have perused the records of KSF immovable properties including Encumbrance Certificates shown as Annexure II with the list of documents.
              </p>
              <p className="font-semibold">
                37) It can be concluded that the present Dean Cum President of KSF is Mr. D. Abraham Doss, S/o. Mr. A. Dharmaraj, and Mr. D. Arulraj, S/o. Divyanatha Pillai, is the Secretary and its Chief Property Officer who is authorized to deal with the properties owned by and belonging to KSF, originally purchased by its Founder Rev. Fr. J. Sandegren and properties belonging to the erstwhile Church of Sweden Mission now an integral part of "Kremmer Sandegren Foundation" (KSF).
              </p>
              <p className="font-semibold">
                38) I am of opinion that Mr. D. Abraham Doss, S/o. Mr. A. Dharmaraj as President and Mr. D. Arulraj, S/o. Divyanatha Pillai, as the Secretary and its Chief Property Officer have good, valid and marketable title over the properties purchased as well as standing in the name of KSF. The Annexure II mentioned property is one of the properties of KSF. It has good, valid and marketable title over the property described above and Mr. D. Arulraj, S/o. Divyanatha Pillai, as the Secretary and its Chief Property Officer has full delegated authority to deal with such property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none bg-gradient-to-br from-primary/10 to-primary/5 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                  A just and self-reliant society where marginalized rural communities, especially women and children, have equal access to education, health, economic security, and social awareness, enabling them to live with dignity and purpose.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Creating self-sufficient communities</p>
                  <p>• Empowering the most vulnerable</p>
                  <p>• Building sustainable rural development</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-gradient-to-br from-secondary/10 to-accent/5 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                  Integrated and sustainable development of rural communities through women's empowerment, child education and care, community health, sustainable agriculture, and capacity building—making communities self-sufficient through participatory and grassroots approaches.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Women's SHGs and financial independence</p>
                  <p>• Child development through creches and education</p>
                  <p>• Health awareness and organic farming</p>
                  <p>• Community organization and leadership training</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;