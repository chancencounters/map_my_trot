require 'faker'

prof_pics = HTTParty.get('https://pixabay.com/api/?key=4344837-c3843e1eaace1a794994042ae&q=person+running&image_type=photo')
urls = prof_pics["hits"].map { |pic| pic["webformatURL"] }

User.destroy_all

10.times do |i|
  user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  avatar: open(urls.sample),
  email: Faker::Internet.email,
  password: "password",
  )
end



zack = User.create!( first_name: "Zack", last_name: "Yu", email: "demo_account@admin.com", password: "password", avatar: open(urls.sample))
michael = User.create!( first_name: "Michael", last_name: "East", email: "blue@gmail.com", password: "password", avatar: open(urls.sample))
lucy = User.create!( first_name: "Lucy", last_name: "Blanc", email: "lucy@gmail.com", password: "password", avatar: open(urls.sample))
irene = User.create!( first_name: "Irene", last_name: "Grigio", email: "irene@gmail.com", password: "password", avatar: open(urls.sample))
fabio = User.create!( first_name: "Fabio", last_name: "Pinot", email: "fabbio@gmail.com", password: "password", avatar: open(urls.sample))
max = User.create!( first_name: "Max", last_name: "Hempfling-san", email: "max@gmail.com", password: "password")
bruce = User.create!( first_name: "Bruce", last_name: "Wang", email: "bruce@gmail.com", password: "password", avatar: open(urls.sample))
kinko = User.create!( first_name: "Kinko", last_name: "Want", email: "kinko@gmail.com", password: "password", avatar: open(urls.sample))
robb = User.create!( first_name: "Robb", last_name: "Veltman", email: "robb@gmail.com", password: "password")
daniel = User.create!( first_name: "Daniel", last_name: "Veltman", email: "daniel@gmail.com", password: "password", avatar: open(urls.sample) )
megan = User.create!( first_name: "Megan", last_name: "Eagle", email: "megan@gmail.com", password: "password", avatar: open(urls.sample) )
catherine = User.create!( first_name: "Catherine", last_name: "Eagle", email: "catherine@gmail.com", password: "password", avatar: open(urls.sample) )
fannie = User.create!( first_name: "Fannie", last_name: "Chan", email: "fannie@gmail.com", password: "password", avatar: open(urls.sample) )
agnes = User.create!( first_name: "Agnes", last_name: "Wan", email: "agnes@gmail.com", password: "password", avatar: open(urls.sample) )
scarlet = User.create!( first_name: "Scarlet", last_name: "Johansson", email: "scarlet@gmail.com", password: "password", avatar: open(urls.sample) )
jessica = User.create!( first_name: "Jessica", last_name: "Biel", email: "jessica@gmail.com", password: "password", avatar: open(urls.sample) )
mila = User.create!( first_name: "Mila", last_name: "Kunis", email: "mila@gmail.com", password: "password", avatar: open(urls.sample) )
emmanuelle = User.create!( first_name: "Emmanuelle", last_name: "Chriqui", email: "emmanuelle@gmail.com", password: "password", avatar: open(urls.sample) )
hodor = User.create!( first_name: "Hodor", last_name: "Holdthedor", email: "hodor@gmail.com", password: "password", avatar: open(urls.sample) )
christina = User.create!( first_name: "Christina", last_name: "Johansson", email: "christina@gmail.com", password: "password", avatar: open(urls.sample) )
eva = User.create!( first_name: "Eva", last_name: "Mendes", email: "eva@gmail.com", password: "password", avatar: open(urls.sample) )
olivia = User.create!( first_name: "Olivia", last_name: "Wilde", email: "olivia@gmail.com", password: "password", avatar: open(urls.sample) )
meagan = User.create!( first_name: "Meagan", last_name: "Good", email: "meagan@gmail.com", password: "password", avatar: open(urls.sample) )
bethany = User.create!( first_name: "Bethany", last_name: "Mango", email: "forgetthemango@gmail.com", password: "password", avatar: open(urls.sample) )
christian = User.create!( first_name: "Christian", last_name: "Tang", email: "christian@gmail.com", password: "password", avatar: open(urls.sample) )

max.update(avatar: File.open("app/assets/images/max.jpg"))
robb.update(avatar: File.open("app/assets/images/rob.jpg"))
mila.update(avatar: File.open("app/assets/images/mila.jpg"))
hodor.update(avatar: File.open("app/assets/images/hodor.jpg"))
eva.update(avatar: File.open("app/assets/images/eva.jpg"))
olivia.update(avatar: File.open("app/assets/images/olivia.jpg"))

Friendship.destroy_all
Friendship.create!(user: zack, friend: michael, status: 'accepted')
Friendship.create!(user: zack, friend: lucy, status: 'accepted')
Friendship.create!(user: irene, friend: zack, status: 'accepted')
Friendship.create!(user: fabio, friend: zack, status: 'accepted')
Friendship.create!(user: bruce, friend: zack, status: 'accepted')
Friendship.create!(user: kinko, friend: zack, status: 'accepted')
Friendship.create!(user: bethany, friend: zack, status: 'accepted')
Friendship.create!(user: max, friend: zack, status: 'accepted')
Friendship.create!(user: robb, friend: zack, status: 'accepted')
Friendship.create!(user: daniel, friend: zack, status: 'pending')
Friendship.create!(user: megan, friend: zack, status: 'pending')
Friendship.create!(user: scarlet, friend: zack, status: 'pending')
Friendship.create!(user: jessica, friend: zack, status: 'pending')
Friendship.create!(user: mila, friend: zack, status: 'pending')
Friendship.create!(user: emmanuelle, friend: zack, status: 'pending')
Friendship.create!(user: christina, friend: zack, status: 'accepted')
Friendship.create!(user: eva, friend: zack, status: 'accepted')
Friendship.create!(user: olivia, friend: zack, status: 'accepted')
Friendship.create!(user: meagan, friend: zack, status: 'pending')
Friendship.create!(user: christian, friend: zack, status: 'accepted')

Route.destroy_all
Trot.destroy_all
Comment.destroy_all
Activity.destroy_all

pokehunt = Route.create!(
  user_id: olivia.id,
  name: "PokeHunt",
  distance: 0.03,
  polyline: "urp~Cly`iNBKDCH?RFd@Bp@Kr@DfAJNA`@OVAL?JFHJ@HAb@Bb@T`B@\\ORKT?\\Zf@BPAFAJQFQCUYMIO?W?QGEK?MDcAAOKEQ?O@W?S?]_@GCMEg@MMMCOE_@CYMW]a@",
  origin: "Deicke Park Trail, Plantation, FL 33322, USA",
  destination: "Deicke Park Trail, Plantation, FL 33322, USA",
  bounds: "{\"south\":26.13807947730626,\"west\":-80.29455780656815,\"north\":26.141450506670363,\"east\":-80.28910219343186}",
)

aa = Route.create!(
  user_id: zack.id,
  name: "A/A Route",
  distance: 0.92,
  polyline:
   "o`uwF`_sbMhJuYbAaDRBjAHF?n@s@LGNCZBL@BIFU?CH?^@NCRMPYJ]@c@AQHEPGJCV@LJbBaF~H}V|D_M`GzDvMpInFjDdBlAvFtDtDbCr@f@H`EJLDLHzD@~@{A`Fk@nBsEnN`BkFtB`BbBnA~AxAhFdEtBbBxHfGzC`Cf@\\VTWUg@]mA_AmAaAs@k@oAbDuChHsCnHuCnHeDkCSf@_@~@o@fBGb@eCmAsBuAcFeDkCiBuAVYFaBx@wFrCcCpA]P\\Q_C}AkGgEiG}DsMwIuJqGaGyDX_A",
  origin: "159-165 W 25th St, New York, NY 10001, USA",
  destination: "248e E 23rd St, New York, NY 10010, USA",
  bounds:
   "{\"south\":40.71901960261797,\"west\":-74.0166450531006,\"north\":40.75153796013855,\"east\":-73.96600494689943}",
)

Activity.create!(user_id: zack.id, activatable_id: aa.id, activatable_type: "Route")

prospect_park = Route.create!(
 user_id: zack.id,
 name: "Prospect Park Hip Trot",
 distance: 0.23,
 polyline:
  "cgdwF|pnbMt@f@d@`@RXd@nAJZBb@OfBy@v@a@n@Yt@Uj@IIAAC?m@d@_@JULMRa@dBg@xBs@K@u@I{@Y_AKg@Eg@EgAE[K[i@sAMi@W_AOa@UYUWOKUGm@?g@CYIIMSKVSLSFe@Vw@Vg@BY?YWm@Q[SSSGe@FaAPWEYKi@WWIGQu@J}@F}@@w@Iq@Qg@SaA}@WOWGeA@w@DPs@JYTa@h@o@GoAMgA?YD]LWTWHGh@MXEn@E`A?JBXWZYT[x@uBBOPN^^TTBA\\QXIb@@n@PdA`@CMSwACU?m@Fe@BM~AUTGPIJG@BPTPLLDAZGdA?`@F^Nn@DJ@AJBJ?ZM^[TSDAD?BXFb@JVNVVVb@VM`@ENA^?^Lp@Jv@Fn@?h@Ep@St@IRALBXV~@FDPLNR`@|@Pb@^f@\\^dBz@FD",
 origin: "Center Dr, Brooklyn, NY 11225, USA",
 destination: "Bridle Trail, Brooklyn, NY 11215, USA",
 bounds:
  "{\"south\":40.6542111264627,\"west\":-73.98329502655031,\"north\":40.6704881156263,\"east\":-73.95797497344972}",
)

Activity.create!(user_id: zack.id, activatable_id: prospect_park.id, activatable_type: "Route")

india = Route.create!(
  user_id: zack.id,
  name: "The Beauty of India",
  distance: 1.23,
  polyline:
  "uo{dDard{MREH?NFDDBLADbA|Ah@dAVd@n@t@fAv@dAh@bAb@fA^bG`BvA\\tBXn@RvA`@f@T\\Nd@Xz@j@tAhAdBnB`BbC~AvBlCpDBAD?HH?@|JvA~AT~CTj@@z@FhB@^CnCa@hAGXAzAJ?@A@?@?@?BBDDBJADKAEACDmAn@aO@??C@EAAHaAr@{M@ABC?IAED{@fAwLB?BCBI?KCCAAjAsKLgBt@sJV_CbAiH@?@?@A@C@EAE?Az@wFjC_PHCHIBK?KEKECAAT{A\\aF?aCKsBSuBs@_Gc@uD_@wCYgAYk@uAcB_@_AKe@Ci@Fm@f@aBHs@@]@w@Am@KcB?_@Fu@Jo@Hu@LMbAuAbByClBeEt@}AtAqC`AwBrBaE~AcDx@kBTq@`@qBLsBJcEBoIAuJ?mBIqDe@mIOeCUiCKwB]mGIYQaCMkBSwE?}AF_BP}AZkB\\iAb@oAx@v@y@w@]TKHcAvAcPtRs@`AwBlC_C|CkCzDsCtDoFbHkD`F{CrEsA~Bs@vAu@lAmBzCaC|DyAlCqApD}@|C]xAg@rBGPMz@CdAAbGG?B`IoA??[?ZfEAlEEBB@NFBb@XDPBNJX@NDXPh@BZGdHDHdBh@ZFIR_@dAOl@?LBFBBjA`@r@LFLF~@BNEh@?HBNBPNnAHD\\LU|@AAC?G@EBIJCNBNBDBBUh@m@|@u@bA_BhBwC|Bi@n@g@v@cBrCaE|GcAxB}AfE]x@Qv@OjBGbB@~AAf@G`@_@rAmA~C[t@_@t@c@f@q@f@kAv@o@ZG?OFc@PYFc@EEsASkCGu@E?I?CAoC~AwD|Bk@Z}@VsBj@wBp@eBd@gCn@}Ab@kAV_Fb@sAHqGPQ?Hv@FfBBtC@rADr@T`BX|@fAjBdA|AzC`FdArAlBWpAyAPMPCFABEB}AhBA@c@DWIwI?Qh@A",
  origin: "Bijali Ghar Crossing, Agra Fort, Rakabganj, Agra, Uttar Pradesh 282003, India",
  destination: "The Mall Rd, Agra Cantt, Rakabganj, Agra, Uttar Pradesh 282001, India",
  bounds:
  "{\"south\":27.13257961761437,\"west\":77.98554489379876,\"north\":27.20893884119268,\"east\":78.0868251062011}",
)

india_trot = Trot.create!(
  user_id: zack.id,
  route_id: india.id,
  description: "Visited all the Taj Mahal and Agra Fort. Beautiful!",
  date: "Mon, 12 Jan 2016",
  duration: "1:12:00",
  name: "Touring India",
)

Trot.create!(
  user_id: zack.id,
  route_id: india.id,
  description: "Visited all the Taj Mahal and Agra Fort. Beautiful!",
  date: "Mon, 5 Jun 2016",
  duration: "1:12:00",
  name: "Curry in a Hurry",
)


Activity.create!(
  user_id: zack.id,
  activatable_id: india_trot.id,
  activatable_type: "Trot",
)

Activity.create!(
  user_id: zack.id,
  activatable_id: india.id,
  activatable_type: "Route",
)

white_house = Route.create!(
  user_id: zack.id,
  name: "Presidential Tour",
  distance: 0.48,
  polyline:
   "qqllFleeuM?ZRDNA@r@Hf@Nb@d@z@AD?F@HHLN?DCj@`@?pEGf@ANIZfI@lD??UP?HOTORYBc@Dc@T]|@w@?c@b@BL@x@~AT`@RRRLV@n@C\\Qj@Oh@Cn@HHBNsAlARVJ\\Tj@n@Zn@JR?L\\@?J?Kf@@`DAjF@@Z?pAA\\ELOVXREX?XBTJRXVH`@Tzk@v@@?fC?j@iA?QJWVU\\Qh@Kf@Ch@@l@Hl@Nd@P\\NP\\X\\N^Fb@?b@I`@S^_@Ve@Pm@Fo@?s@C_@p@CDp@UJOXIh@Sv@Yf@CDBELSVm@Ly@J[RSHCAWCYUoA[o@a@k@g@c@@E?gBGkIAcPIqLC_CDEHQHBICFOJ_@@Q?m@I]Wo@Ce@?aAGmP\\mAFw@Aq@Ky@Se@EGHKTo@H}@?_AEk@Mc@Uo@a@y@QQYGw@?MDSCYEMWIWWHSJg@\\i@`@g@Vo@Nu@BgEAkL@kHA{N@c@?B^?`Ge@b@AACCGCI@IDEV@JMV[z@Ml@Cr@",
  origin: "1600-1608 H St NW, Washington, DC 20006, USA",
  destination: "1631 E St NW, Washington, DC 20500, USA",
  bounds:
   "{\"south\":38.88553437772985,\"west\":-77.05479002655028,\"north\":38.90223510197465,\"east\":-77.0294699734497}",
)

Activity.create!(
  user_id: zack.id,
  activatable_id: white_house.id,
  activatable_type: "Route",
)

pyramids = Route.create!(
  user_id: zack.id,
  name: "Great Pyramids Exploration Trot",
  distance: 1.14,
  polyline:
   "ot~uDqy_}D^Fb@f@HLh@`BR`@HFLDrK?hAAh@AG`@IdAIpDOxBMxCGxGzAd@nEHxDBnCTp@TLJTfBZhBb@xAfBlCLZDXBhBJhIHfCPvD@\\Nj@Ff@VbAZxAHhAZXCLDBzBpAzAt@f@L|@J|@Dj@LZFZ@nAUfACl@ItDoA`Bi@jBy@~@a@nBi@lASdBKvAUnCo@zCs@pBg@Tw@T}@De@AY[u@a@q@kA_Cg@cAe@mAq@uAu@i@sAiAi@u@a@s@_@aBKcANqAR_ANoAZg@j@S|@B`@FlCl@lC\\Z@hC?hAEn@IfBmAPSb@{@LMRGv@OQkB{D_c@QaBSmAoA{FuBaJ]sAQg@Wc@]_@a@W_@M_@Ga@Cs@Hc@@k@Cq@SSOsAcCq@{@m@g@aAc@wEyAe@W{@iAk@s@g@We@Ia@@uKr@EC?CAImAP}@Pi@?qAMkEc@SAaBH}Gd@S?k@F[JiAHJv@F~@J`D}@B@d@?|ACBGFEFKRIPGZB|A?|D}@xFIZqArDm@hASv@CLAQG{Ag@BwA@}HPKDFXeBDyCBaCtICJLCRBD@",
  origin: "Nazlet El-Semman, Al Haram, Giza Governorate, Egypt",
  destination: "Al Ahram, Al Haram, Giza Governorate, Egypt",
  bounds:
   "{\"south\":29.952070433460253,\"west\":31.105554946899474,\"north\":29.989247194303484,\"east\":31.156195053100646}"
)

Activity.create!(
  user_id: zack.id,
  activatable_id: pyramids.id,
  activatable_type: "Route",
)

lago = Route.create!(
  user_id: zack.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)

Activity.create!(
  user_id: zack.id,
  activatable_id: lago.id,
  activatable_type: "Route",
)

central_park_trothaton = Route.create!(
  user_id: zack.id,
  polyline: "qmzwFtgnbMY\\El@ETOVGl@SdAQpAJBNT\\PTDNNRPHRNJv@z@`@R`@?^ED@EA_@Da@?a@S[p@Wd@Mj@AhAOt@EPIp@ARA~@i@nA[hAKR[V{@dATNlAf@mAg@q@e@mA_AU[SNM[Os@Ga@QgAYXUG_@Jg@HW`@Q`@MLYVW@WPGBISe@k@m@i@cBkAWUYg@c@Kq@_@o@o@e@y@{@oBG?]E_@?Q@EGIGOAYESU_@w@QgAWk@OOW_@ISR_@FE@M@MDABEFENAJ?`@Wn@e@j@e@NQ@g@F?FWHMj@e@PWFa@Cm@Go@r@TV@RKPYV{@RWLOFGh@]h@OYuA?QYc@g@[uA_@?_@CUM[OQDa@[K[Mo@g@KMJLn@f@v@XH_@HONYJg@LUZKRMJW@cA?c@H]JYh@w@Ve@Pj@L`@Zr@VTPDd@XT|@Pn@PRR^Vb@`@VjAd@JVPP|@hAGX@d@Fz@D`@DFPh@LR?^f@j@TFFA@\\Nj@ZHX?VCBA@NBZV?XF?FATBj@Fj@Af@Kn@TF`@GXQ`@k@",
  bounds: "{\"south\":40.76688742711576,\"west\":-73.97560368919369,\"north\":40.779887316918376,\"east\":-73.95691405677792}",
  name: "Central Park Trothaton",
  origin: "Terrace Dr, New York, NY 10024, USA",
  destination: "Center Drive, New York, NY 10019, USA",
  distance: 0.21,
)

Activity.create!(
  user_id: zack.id,
  activatable_id: central_park_trothaton.id,
  activatable_type: "Route",
)

Comment.create!(body: "Phew, what a trot!", user_id: zack.id, commentable_id: central_park_trothaton.id, commentable_type: "Route")


white_house_trot = Trot.create!(
  user_id: zack.id,
  route_id: white_house.id,
  description: "He was busy, I'll catch him next time...",
  date: "Thu, 03 Nov 2016",
  duration: "02:20:00",
  name: "Visiting Obama, NBD"
)

Trot.create!(
  user_id: zack.id,
  route_id: india.id,
  description: "Visited all the Taj Mahal and Agra Fort. Beautiful!",
  date: "Mon, 19 Dec 2016",
  duration: "1:12:00",
  name: "Enjoying the Spices",
)

temple_of_heaven = Route.create!(
  user_id: bethany.id,
  polyline: "}{krF_uneU?e@y@?AMq@@q@@?Ng@?A_@{A@oBHc@_@_AiAGE}A@EaDCuBoABnACAu@~@A?[FAHAHEHY@KzAAQ_TcJLA`@I\\MVUTUJWD[E]S[k@AACA?V?eAAm@DCHOXe@PKZEZBVJLH?yACgAy@Bo@Rk@TUPg@p@[dAQ`AAT_@@wDBsGLgFRMJFpDG{DKcMBiCNqCTgBh@gD~B{FEMSUc@FkBXgBLG@FAfBMjBYb@GRTFLN_@J]RwAJeACoAs@gK]iG?g@@qA@{Cs@?c@@AAEQq@AYBa@PC?IMEGcAPbAQZWTYPEtCWGg@QkAAI`@?@YHgIDk@Nq@^}@d@uALo@PgANyB?wB?Wr@EtDOn@Cj@WxDQBxCD~DtDIvDEdCEBHBh@FhBbA?FfGN?vABBg@GUEi@E_DD~CDh@FTCf@wACFhN@lATbXiGJmHN]@J`DJrMAPRIZKhAUrAOPAv@BvBDl@?vDE~Re@~LQBxDJjMd@xc@AaB_BDiHPsFPw@B{ABFdEDlEqA?BfC",
  bounds: "{\"south\":39.86875135695206,\"west\":116.40038536758425,\"north\":39.895096828072305,\"east\":116.43776463241579}",
  name: "Temple of Heaven",
  distance: 0.35,
  origin: "Dongcheng, Beijing, China",
  destination: "Unnamed Road, Dongcheng Qu, Beijing Shi, China",
)

Activity.create!(
  user_id: bethany.id,
  activatable_id: temple_of_heaven.id,
  activatable_type: "Route",
)

lago_trot = Trot.create!(
  user_id: zack.id,
  route_id: lago.id,
  description: "Ran into some banditos, it was scary",
  date: "Sat, 31 Dec 2016",
  duration: "2:44:00",
  name: "Friday night Lagos Trot"
)


Activity.create!(
user_id: zack.id,
activatable_id: lago_trot.id,
activatable_type: "Trot",
)

pyramid_trot = Trot.create!(
  user_id: zack.id,
  route_id: pyramids.id,
  description: "It was like reenacting the mummy all over again",
  date: "Sun, 04 Dec 2016",
  duration: "1:20:00",
  name: "Great Pyramids Trot",
 )

Activity.create!(
 user_id: zack.id,
 activatable_id: pyramid_trot.id,
 activatable_type: "Trot",
)

naples = Route.create!(
  user_id: bruce.id,
  name: "Naples Vesuvio Trip",
  distance: 10.1,
  origin: "80056 Ercolano, Metropolitan City of Naples, Italy",
  destination: "Via Rivo Carotenuto, 55, 80041 Boscoreale NA, Ital...",
  bounds: "{\"south\":40.77534792842381,\"west\":14.350321470336894,\"north\":40.87926256793733,\"east\":14.499838529663066}",
  polyline: "kqdxF}gtvA}Dc@e@vFIn@t@|F~B|G`@bIz\\uStFeGpHqSx@{@xGkCn[yJdFk@rGOdHuCbIyDzLqDpEeBrEwEhCoBz@u@n@f@\\Z\\L|AZdCxBnCNjAr@`@h@v@Ut@u@zAk@nC_@~AkAjEbEfJbJj@f@xBnB~@}AnE_GnCqDhGmIr@w@fCe@`DyAjE}DvCPx@RfAkC~AgEl@aBjAaE|D_NVm@jDaJxOec@vKkYzOwd@gUsHaIoCGkBrBaZwEgLgBcAyCZkI~@eCo@eByBcAsDi@iCj@aMfAcEbAkF_@}Cc@mBPgDl@_BNgAHq@w@m@fA_ETgA|@}EzAmI^wClCcLp@qGv@aFFe@\\_CsAgAmCaCIEkDu@iAGr@}OZyD`BqI^}LjBwJd@mEE}Mf@mJvB}YMwBGOAOH{CWeH{BcQmGkLqFuJ?aK?qTn@oLxDgPp@yNoLz@eADL~DEJ}CrAFExCsAKeEdIg@nDY?mAG{@EIqDuFmGuJsDaEgE{BuBkAcEoFiEuDyCqDo@oAsBwAgKgCi\\_EkDYsBZwHnDgHrDgCU{\\}IgMqCuGuCgAoAi@i@iEu@sJJiIBqF}AuB_B}HPgGBqG_CqEJaN{BsSkDgBCyF|@cGjAwPhB_KTmHzBwJ[gNeCgFo@eDaAoBZq@LkEjGaBhBAnDcBlF_AfFGfBt@J~@Lp@b@hJdIf@bAr@zHs@{Hg@cAiJeIq@c@_AMu@KKzACbCGp@g@dBg@hKgDh@kAh@Od@wAkBsLx@ABA@MTcA~A{EbB_G~AcEf@wJLqBt@sGfFgFlDwFbCyK`LiErJiCtLmAfD_BdHsCl[qG|q@cA~HiEnQXlLdEhPfInM`BlLCf^kGf]mJzYuD|Ku@zDHbS|@dO?hB^HvOpAnAt@F`@xASjB\\ClEZbCr@PgAMJnHMfFu@lD@vCCrLkBtJBlBXlAbC`@d@Db@rFRbB`Aj@`CdBl@x@PlBf@pEpAvAjAdAzD|GpFjKrCbHAzCHvD|A`BpB|@x@r@EbA~@hBp@|@d@`B`BdJzBvLOlEZpB`JvL~GrFdBhDh@|CtAvBbB`C`IjEPDFDtDWhBUbDg@l@TxBrGt@xBzAPvBOjAXjAt@x@sAtAgBh@w@rAxBj@_@JO^YXKbBhAhBjDj@h@f@x@|BhEbBfA`IxEpAl@|Bc@bFWzEmBxBmEpAaA|I_@pClBxGd@zAVRjCrAvJbAjFh@fDjB~ArG`Cv@R@hBj@|D`@jC_@~A^Tf@\\bCp@~@PVa@d@wF|Db@@?FkAlA}@rAP|BYC}@DK",
)

Activity.create!(
  user_id: bruce.id,
  activatable_id: naples.id,
  activatable_type: "Route",
)

yosemite = Route.create!(
user_id: max.id,
distance: 89.04,
origin: "Unnamed Road, Bass Lake, CA 93604, USA",
destination: "Glass Flow Rd, June Lake, CA 93529, USA",
name: "Yosemite",
bounds: "{\"south\":37.34570149144286,\"west\":-119.56430822418213,\"north\":37.781130819131455,\"east\":-118.96623998687744}",
polyline: "yeycFb{sxUoUv_@er@r[cZxl@ntLkEt\\xO~ZhMuMbPkD~s@f^rcAxDbiAzr@lk@pTpeAmExw@pMbd@{z@}IkcAuJwb@oDwMlW_SrDwT_Vg]_e@{Teh@iq@po@wLv`Bgb@lgBcd@a_Aoc@u|@u`@e}@sv@gOgRcuArJil@{q@ioA{SilAoo@nMyk@_qBbIkjByZu`@on@sCkM{q@kIk~@a`Dc\\}iBmIe|@wcB_eAxbAU`i@}o@|hBe{@paA{KdF}I_@klBnI_b@cQo[{]wh@cz@eYc[wn@{fAw\\eKgJ{XqBklAin@auAkYgQgMiz@kB{d@sXaaA}~@}r@qi@eVyo@}b@m]{Mop@yKmhAmO_{@cbA{uBua@cy@nPwZ}TmXq^{t@ecBi_@in@`Fo~Am\\ksA_TeaDtN}wFeJyiAihAksAo~Cwf@uz@y@gq@eo@gWvAuIkd@jQum@mOm^i}@yb@{QnDbKcj@VseApNokBvlBk`Cwz@gxGi_@_tAdd@eh@dkAua@zpI}_AjwCs}@hjBk|@tnBouAvz@woA~o@aHjo@ch@~xAua@xJio@uMgh@~Pe[tm@k|@xVcf@flAeeAf{CazBh}Bc~@vb@v[j_AiFrjAaQ|q@a@dc@uXbJpS~m@zr@`Zva@oH|hB|^zv@zq@vc@neA~u@rhB}c@_d@fkBDlXbEn\\cMxeA|Mn~BoJ|\\dDzeAs~AtQaTtVa`@{Kug@}Z_fAsEkl@}FaaAjUax@pb@_PlEyCmCqTju@qqB`yBo]ji@qfBppCsHh`Cd@ni@aP`oCkm@bx@ac@prAahAzlAad@j}AdU`^}Nx_@mOvMlHfd@_k@aIuj@|]geAfF}o@u@ekBnq@yn@z_@kZfRxy@vj@v{@vp@qUpIaS~ZmCrKh]d}@_Blj@xQhaAhuBf{DxnBrvDbz@gB~dBuQjY`t@rKd`AwNzm@|Hh|@og@juAd[r}@fZ`c@gVhg@{`@jVtAtf@wChPvy@jl@h^b}AkNptAxRpsAzNpm@vg@zd@j\\nr@`bA`h@|gBgSpMcE~WkJrg@alAth@}r@_Gif@xZoeApg@y^r\\nKvVhx@d`@bg@tfBFz|Cd^TjfAlZ|p@bm@[fV|z@cMfeB~d@bgBhw@yUx`@pcBha@|`AcIhh@jJbf@pIxb@bp@bShp@j|Ahp@fgAnMfNbRu`A~Uky@l[ytBpZcCbBfV|a@rO|a@t|@la@i\\hsCj^w@ui@xDa|@k[geAoq@uf@XslAi_@whAoFqYhRqOnDwNs\\cQae@qT~nAodA|TsW",
)

Activity.create!(
user_id: max.id,
activatable_id: yosemite.id,
activatable_type: "Route",
)

naples_trot = Trot.create!(
  user_id: zack.id,
  route_id: naples.id,
  description: "Naples is amazing at night",
  date: "Sat, 31 Dec 2016",
  duration: "2:44:00",
  name: "Thursday night naples Trot"
)

Activity.create!(
user_id: zack.id,
activatable_id: naples_trot.id,
activatable_type: "Trot",
)

aa_move = Trot.create!(
  user_id: zack.id,
  route_id: aa.id,
  description: "Fantastic",
  date: "Mon, 28 Nov 2016",
  duration: "4:11:21",
  name: "Moving Offices by Horseback",
)

Activity.create!(
  user_id: zack.id,
  activatable_id: aa_move.id,
  activatable_type: "Trot",
)

isle_of_man = Route.create!(
user_id: robb.id,
polyline: "y}biIxei[bCaWPmA_BgB}A}A{BiA_Ds@k@u@QOa@He@AyC}BaE}B}T_ReMjD]TIDe@ToCdC_@p@BB@D?JVxArDrK^|I`BhCp@FdDxERIxAgDvCeHwCdHyAfDSHeDyEWCGl@z@dH?fHx@~O|BjSvBhFn@zGbAt\\Tn[_AlNMjQIjHaAnGaC`JkDxGm@hBW`EDxJe@zU{B~CsFlE{HbGYrGVfBdBdDlFpTjDtSn@|KZvK|CpPjCl^Y|FcAzF`A`KlAh]JrBiA|A}BhBw@bBoA`@cCjHg@NqAi@eF]oAd@kAD}D_F_Br@}C~DiBnFmCb@{DVaFnEsAv@e@B_KbIyB`AeGlEuB`EoBrFgCrCk@dCuAxK{BzD|ATbAtQcAuQmC]oK@sCk@kDBcEkAaGp@{IdE{A`BqDjAw@d@yBjD}FjKg@DeGkKy@u@i@?oAhAa@MgCwLeAsLSqGx@mMMkFyEwPiFqFyIkD}Sia@cLuFYg@Le]eEs`@cEyRsD}FeCwC}ZiUgKmKiBmA_@v@wAvM?xD?yDvAwM^w@fF{CzBi@zAeD`EwI|H{WhLk`@jJwPhEyGlFkEbDTdEc@`Au@V}IsAqKwCqLsGmLkG_MsC}G}BuGqG{Im@yBqCuCmB{EmE{IiD_LqBaZyDqNa@gGp`@i@\\ADwJb@AlA?vAHzARlCTfCY`C}BxE}AbB?hD{@~CBpDiAzEaHa@mAmD}D}DeIkBqLGkSZwPk@oBkAw@oAq@Qe@XyGSgGmCog@xC_CjGeAMoFiEq@{HW{K]yDo@iCgAsGGiDh@aAKmGbBz@xFd@~Bh@jDP|@Q}@i@kDWyAa@qBg@mDi@Du@V_B`@eF}@oBmAoA}Ce@u@eAEiBFSQoAaEaDcH}AuHoCeGyAmEwEcGz@eNkB_Om@iCs@u@_KuGyHgIu@q@Mm@D}@AoBZs@ZWZqBf@gCr@{ABmA_BkJ?Sd@YxCqAfEmDjEoB`C}ChIgEbCuCbC_JdB{CfGiB|CEdGv@lG]xB{@~AeBzD}GvCoGzDqC~DiCbFgG`JuJrBmBf@kAx@cDnOiWVi@rBdBdHdGrDtCjFzFfFtEjNvL|IhLhJbP~GrT~DxQ`BdLp@pD|A`C`EbHn@k@o@j@FbA~@bGhFvLfCfE`@hB`@vDvCfGlK~QlIhNfCp@nD~EpE~GpBxAZdDhJt`@lJnWrLrY|DlM|Ozn@|C~LZ`@HFdMiDj@P`V|RvHvGNv@`@Pj@WhJzBfCjCY~AOpAK`Aa@xE_JkC",
bounds: "{\"south\":54.0417544235127,\"west\":-4.796547059326144,\"north\":54.20271978529799,\"east\":-4.497512940673801}",
name: "Isle of man... and Pheasants",
origin: "56 A5, Isle of Man",
destination: "106 Silverburn Cres, Isle of Man",
distance: 1.56,
)

Activity.create!(
user_id: robb.id,
activatable_id: isle_of_man.id,
activatable_type: "Route",
)

Comment.create!(body: "Bro... How did you survive the isle....", user_id: zack.id, commentable_id: isle_of_man.id, commentable_type: "Route")
Comment.create!(body: "Hodor Hodor Hodor", user_id: hodor.id, commentable_id: isle_of_man.id, commentable_type: "Route")
Comment.create!(body: "Get out of here Hodor! I swear to god, I'm going to unfriend the hell out of you!", user_id: zack.id, commentable_id: isle_of_man.id, commentable_type: "Route")


yosemite_trot = Trot.create!(
user_id: max.id,
route_id: yosemite.id,
name: "Yosemite Uber Ride",
description: "Scenic drive around Yosemite!",
date: Time.now,
duration: "1:13:12",
)

Activity.create!(
user_id: max.id,
activatable_id: yosemite_trot.id,
activatable_type: "Trot",
)

Comment.create!(body: "Max... mapmytrot is for trotting, not uber rides... get it together man", user_id: robb.id, commentable: yosemite_trot)
Comment.create!(body: "Sorry... I'm Max, I can't follow instructions", user_id: max.id, commentable: yosemite_trot)
Comment.create!(body: "Smh", user_id: zack.id, commentable: yosemite_trot)

easter_island_trek = Route.create!(
  user_id: eva.id,
  name: "Easter Island Trek",
  distance: 3.56,
  bounds: "{\"south\":-27.17453079868757,\"west\":-109.44104481018064,\"north\":-27.067580336719033,\"east\":-109.26646518981931}",
  polyline: "|_kdDhn}ySwGx@gBd@o@jAQjC|@dDjBdFd@jFd@hEDvEmAxJmA|BuB|@mFbBkBpAmBxGaB~BoChFs@fDKxFzDtMvBxELdAYvNCzG`@zDx@nIt@lGWtAiAZgB?{Cz@sJfHkAbBe@xAPzCy@pBeBhByBv@{C\\wCzDcJlNyD|GmCvIuCtGwD~FyDdGe@rBK`DLtA`CBlR}DxIuDvAUlPnGvHrDnElCjXfPlInFrJxB|GlDpEfF|AhDvArMpElWhClHhC|EdE~H`BnBfGrEp[zR`I|FbG|CpI`G|AxAdFxIzGtPbK|W|@pEp@pClEtJf@l@n@DdF_Cf@KnAJfAp@p@vArAnAz@ArCe@lKpA`Cp@xMfJ|FjDfKlDbKtDfIjBvNnDnC`AlBjBdIjNdC|CjAxB|GvUtIb\\xEhNxE~P`CpGjCvC|BdEnB|IlBnKbHvXzJh[zG~SdFvQ`^|pA]dCaCtG}Bg@|Bf@qErMyBhGwDrK}Lp]kE~LTk@kD}A{@]uF{B_KsEoNkNmI}IvA{F`BqGmBcADuAL}FUsDY_DpBmROw@uCyBiLqJ{AkEeAcAuFwAgAm@iCuDcFu@wJuBcCCqAe@kAiCsAyB}AkHy@aGkAiEaCoDmGwDoNsMqK}FqI_CpI~BpK|FpGnGj@l@TU|@kAPy@EwB^cY@{Eg@i@uBcDDeCUQyIyAL{Bx@gJ|H{A`UyD`JuAtEuAhKyDtAAlEf@lGtB`Cd@|FbDhATzBKxBIzEdAnErAjAMpEkAmBoKoB}I}BeEkCwCaCqGyE_QyEiNcBiGqFySvJFhTDjCBtG}AB]_Tsf@u@qBl@[bM}@xa@gDtL_A`A_@tCe@zNeBbHiAiBqDkA{B]iABySw@aCcC}K_BmIa@sC_DoKeEaHkDsHwGcEuAgAsDiFeImNoBuD{C_C}BkAoBc@cC{@iAi@yC_@o@Ik@oBIOYc@gDwKcAiAm@{Ae@qCiBy@cBGyAPcAmOSsCs@sCaF{IaCcFcJuNyHwR}BkIu@wH{AyC{EmGeAaFgBe^j@sEMmDaAyB]uDG_F|JaM`D_Nf@sDa@uDsCoGy@cA{A]gDzAqCfAmBY}BmCWqCxHeO|R_UZeCMaBy@iBsBqDWoBHmGKyBaAwDmCkJkAcByIwDmB_A_B_Cu@kCsAmDmCgCiIuEsEuH_DmEqHsBw@H_AhAsFdLoBxB{DhBw@Ly@Uy@o@WqASgDiBaKa@eGcB}F[[_BX_ExBgHbBqEnAmGrCmLzAqOfD_JG}Ge@}LcBgNmBeNoBmUeDsM_B",
  origin: "Unnamed Road, Isla de Pascua, Región de Valparaíso...",
  destination: "Camino Vaitea Anakena, Isla de Pascua, Región de V...",
)

Activity.create!(
  user_id: eva.id,
  activatable_id: easter_island_trek.id,
  activatable_type: "Route",
)

Comment.create!(body: "Did you find any eggs? HAHAHHAHA", user_id: zack.id, commentable_id: easter_island_trek.id, commentable_type: "Route")
Comment.create!(body: "That was in poor taste.. sorry..", user_id: zack.id, commentable_id: easter_island_trek.id, commentable_type: "Route")
Comment.create!(body: "This is why we don't hang out anymore...", user_id: eva.id, commentable_id: easter_island_trek.id, commentable_type: "Route")
Comment.create!(body: ":(", user_id: zack.id, commentable_id: easter_island_trek.id, commentable_type: "Route")

Route.create!(
  user_id: eva.id,
  name: "Easter Island Trek",
  distance: 3.56,
  bounds: "{\"south\":-27.17453079868757,\"west\":-109.44104481018064,\"north\":-27.067580336719033,\"east\":-109.26646518981931}",
  polyline: "|_kdDhn}ySwGx@gBd@o@jAQjC|@dDjBdFd@jFd@hEDvEmAxJmA|BuB|@mFbBkBpAmBxGaB~BoChFs@fDKxFzDtMvBxELdAYvNCzG`@zDx@nIt@lGWtAiAZgB?{Cz@sJfHkAbBe@xAPzCy@pBeBhByBv@{C\\wCzDcJlNyD|GmCvIuCtGwD~FyDdGe@rBK`DLtA`CBlR}DxIuDvAUlPnGvHrDnElCjXfPlInFrJxB|GlDpEfF|AhDvArMpElWhClHhC|EdE~H`BnBfGrEp[zR`I|FbG|CpI`G|AxAdFxIzGtPbK|W|@pEp@pClEtJf@l@n@DdF_Cf@KnAJfAp@p@vArAnAz@ArCe@lKpA`Cp@xMfJ|FjDfKlDbKtDfIjBvNnDnC`AlBjBdIjNdC|CjAxB|GvUtIb\\xEhNxE~P`CpGjCvC|BdEnB|IlBnKbHvXzJh[zG~SdFvQ`^|pA]dCaCtG}Bg@|Bf@qErMyBhGwDrK}Lp]kE~LTk@kD}A{@]uF{B_KsEoNkNmI}IvA{F`BqGmBcADuAL}FUsDY_DpBmROw@uCyBiLqJ{AkEeAcAuFwAgAm@iCuDcFu@wJuBcCCqAe@kAiCsAyB}AkHy@aGkAiEaCoDmGwDoNsMqK}FqI_CpI~BpK|FpGnGj@l@TU|@kAPy@EwB^cY@{Eg@i@uBcDDeCUQyIyAL{Bx@gJ|H{A`UyD`JuAtEuAhKyDtAAlEf@lGtB`Cd@|FbDhATzBKxBIzEdAnErAjAMpEkAmBoKoB}I}BeEkCwCaCqGyE_QyEiNcBiGqFySvJFhTDjCBtG}AB]_Tsf@u@qBl@[bM}@xa@gDtL_A`A_@tCe@zNeBbHiAiBqDkA{B]iABySw@aCcC}K_BmIa@sC_DoKeEaHkDsHwGcEuAgAsDiFeImNoBuD{C_C}BkAoBc@cC{@iAi@yC_@o@Ik@oBIOYc@gDwKcAiAm@{Ae@qCiBy@cBGyAPcAmOSsCs@sCaF{IaCcFcJuNyHwR}BkIu@wH{AyC{EmGeAaFgBe^j@sEMmDaAyB]uDG_F|JaM`D_Nf@sDa@uDsCoGy@cA{A]gDzAqCfAmBY}BmCWqCxHeO|R_UZeCMaBy@iBsBqDWoBHmGKyBaAwDmCkJkAcByIwDmB_A_B_Cu@kCsAmDmCgCiIuEsEuH_DmEqHsBw@H_AhAsFdLoBxB{DhBw@Ly@Uy@o@WqASgDiBaKa@eGcB}F[[_BX_ExBgHbBqEnAmGrCmLzAqOfD_JG}Ge@}LcBgNmBeNoBmUeDsM_B",
  origin: "Unnamed Road, Isla de Pascua, Región de Valparaíso...",
  destination: "Camino Vaitea Anakena, Isla de Pascua, Región de V...",
)

Route.create!(
user_id: zack.id,
polyline: "y}biIxei[bCaWPmA_BgB}A}A{BiA_Ds@k@u@QOa@He@AyC}BaE}B}T_ReMjD]TIDe@ToCdC_@p@BB@D?JVxArDrK^|I`BhCp@FdDxERIxAgDvCeHwCdHyAfDSHeDyEWCGl@z@dH?fHx@~O|BjSvBhFn@zGbAt\\Tn[_AlNMjQIjHaAnGaC`JkDxGm@hBW`EDxJe@zU{B~CsFlE{HbGYrGVfBdBdDlFpTjDtSn@|KZvK|CpPjCl^Y|FcAzF`A`KlAh]JrBiA|A}BhBw@bBoA`@cCjHg@NqAi@eF]oAd@kAD}D_F_Br@}C~DiBnFmCb@{DVaFnEsAv@e@B_KbIyB`AeGlEuB`EoBrFgCrCk@dCuAxK{BzD|ATbAtQcAuQmC]oK@sCk@kDBcEkAaGp@{IdE{A`BqDjAw@d@yBjD}FjKg@DeGkKy@u@i@?oAhAa@MgCwLeAsLSqGx@mMMkFyEwPiFqFyIkD}Sia@cLuFYg@Le]eEs`@cEyRsD}FeCwC}ZiUgKmKiBmA_@v@wAvM?xD?yDvAwM^w@fF{CzBi@zAeD`EwI|H{WhLk`@jJwPhEyGlFkEbDTdEc@`Au@V}IsAqKwCqLsGmLkG_MsC}G}BuGqG{Im@yBqCuCmB{EmE{IiD_LqBaZyDqNa@gGp`@i@\\ADwJb@AlA?vAHzARlCTfCY`C}BxE}AbB?hD{@~CBpDiAzEaHa@mAmD}D}DeIkBqLGkSZwPk@oBkAw@oAq@Qe@XyGSgGmCog@xC_CjGeAMoFiEq@{HW{K]yDo@iCgAsGGiDh@aAKmGbBz@xFd@~Bh@jDP|@Q}@i@kDWyAa@qBg@mDi@Du@V_B`@eF}@oBmAoA}Ce@u@eAEiBFSQoAaEaDcH}AuHoCeGyAmEwEcGz@eNkB_Om@iCs@u@_KuGyHgIu@q@Mm@D}@AoBZs@ZWZqBf@gCr@{ABmA_BkJ?Sd@YxCqAfEmDjEoB`C}ChIgEbCuCbC_JdB{CfGiB|CEdGv@lG]xB{@~AeBzD}GvCoGzDqC~DiCbFgG`JuJrBmBf@kAx@cDnOiWVi@rBdBdHdGrDtCjFzFfFtEjNvL|IhLhJbP~GrT~DxQ`BdLp@pD|A`C`EbHn@k@o@j@FbA~@bGhFvLfCfE`@hB`@vDvCfGlK~QlIhNfCp@nD~EpE~GpBxAZdDhJt`@lJnWrLrY|DlM|Ozn@|C~LZ`@HFdMiDj@P`V|RvHvGNv@`@Pj@WhJzBfCjCY~AOpAK`Aa@xE_JkC",
bounds: "{\"south\":54.0417544235127,\"west\":-4.796547059326144,\"north\":54.20271978529799,\"east\":-4.497512940673801}",
name: "Isle of man... and Pheasants",
origin: "56 A5, Isle of Man",
destination: "106 Silverburn Cres, Isle of Man",
distance: 1.56,
)

Route.create!(
user_id: zack.id,
distance: 89.04,
origin: "Unnamed Road, Bass Lake, CA 93604, USA",
destination: "Glass Flow Rd, June Lake, CA 93529, USA",
name: "Yosemite",
bounds: "{\"south\":37.34570149144286,\"west\":-119.56430822418213,\"north\":37.781130819131455,\"east\":-118.96623998687744}",
polyline: "yeycFb{sxUoUv_@er@r[cZxl@ntLkEt\\xO~ZhMuMbPkD~s@f^rcAxDbiAzr@lk@pTpeAmExw@pMbd@{z@}IkcAuJwb@oDwMlW_SrDwT_Vg]_e@{Teh@iq@po@wLv`Bgb@lgBcd@a_Aoc@u|@u`@e}@sv@gOgRcuArJil@{q@ioA{SilAoo@nMyk@_qBbIkjByZu`@on@sCkM{q@kIk~@a`Dc\\}iBmIe|@wcB_eAxbAU`i@}o@|hBe{@paA{KdF}I_@klBnI_b@cQo[{]wh@cz@eYc[wn@{fAw\\eKgJ{XqBklAin@auAkYgQgMiz@kB{d@sXaaA}~@}r@qi@eVyo@}b@m]{Mop@yKmhAmO_{@cbA{uBua@cy@nPwZ}TmXq^{t@ecBi_@in@`Fo~Am\\ksA_TeaDtN}wFeJyiAihAksAo~Cwf@uz@y@gq@eo@gWvAuIkd@jQum@mOm^i}@yb@{QnDbKcj@VseApNokBvlBk`Cwz@gxGi_@_tAdd@eh@dkAua@zpI}_AjwCs}@hjBk|@tnBouAvz@woA~o@aHjo@ch@~xAua@xJio@uMgh@~Pe[tm@k|@xVcf@flAeeAf{CazBh}Bc~@vb@v[j_AiFrjAaQ|q@a@dc@uXbJpS~m@zr@`Zva@oH|hB|^zv@zq@vc@neA~u@rhB}c@_d@fkBDlXbEn\\cMxeA|Mn~BoJ|\\dDzeAs~AtQaTtVa`@{Kug@}Z_fAsEkl@}FaaAjUax@pb@_PlEyCmCqTju@qqB`yBo]ji@qfBppCsHh`Cd@ni@aP`oCkm@bx@ac@prAahAzlAad@j}AdU`^}Nx_@mOvMlHfd@_k@aIuj@|]geAfF}o@u@ekBnq@yn@z_@kZfRxy@vj@v{@vp@qUpIaS~ZmCrKh]d}@_Blj@xQhaAhuBf{DxnBrvDbz@gB~dBuQjY`t@rKd`AwNzm@|Hh|@og@juAd[r}@fZ`c@gVhg@{`@jVtAtf@wChPvy@jl@h^b}AkNptAxRpsAzNpm@vg@zd@j\\nr@`bA`h@|gBgSpMcE~WkJrg@alAth@}r@_Gif@xZoeApg@y^r\\nKvVhx@d`@bg@tfBFz|Cd^TjfAlZ|p@bm@[fV|z@cMfeB~d@bgBhw@yUx`@pcBha@|`AcIhh@jJbf@pIxb@bp@bShp@j|Ahp@fgAnMfNbRu`A~Uky@l[ytBpZcCbBfV|a@rO|a@t|@la@i\\hsCj^w@ui@xDa|@k[geAoq@uf@XslAi_@whAoFqYhRqOnDwNs\\cQae@qT~nAodA|TsW",
)

Route.create!(
  user_id: zack.id,
  name: "Naples Vesuvio Trip",
  distance: 10.1,
  origin: "80056 Ercolano, Metropolitan City of Naples, Italy",
  destination: "Via Rivo Carotenuto, 55, 80041 Boscoreale NA, Ital...",
  bounds: "{\"south\":40.77534792842381,\"west\":14.350321470336894,\"north\":40.87926256793733,\"east\":14.499838529663066}",
  polyline: "kqdxF}gtvA}Dc@e@vFIn@t@|F~B|G`@bIz\\uStFeGpHqSx@{@xGkCn[yJdFk@rGOdHuCbIyDzLqDpEeBrEwEhCoBz@u@n@f@\\Z\\L|AZdCxBnCNjAr@`@h@v@Ut@u@zAk@nC_@~AkAjEbEfJbJj@f@xBnB~@}AnE_GnCqDhGmIr@w@fCe@`DyAjE}DvCPx@RfAkC~AgEl@aBjAaE|D_NVm@jDaJxOec@vKkYzOwd@gUsHaIoCGkBrBaZwEgLgBcAyCZkI~@eCo@eByBcAsDi@iCj@aMfAcEbAkF_@}Cc@mBPgDl@_BNgAHq@w@m@fA_ETgA|@}EzAmI^wClCcLp@qGv@aFFe@\\_CsAgAmCaCIEkDu@iAGr@}OZyD`BqI^}LjBwJd@mEE}Mf@mJvB}YMwBGOAOH{CWeH{BcQmGkLqFuJ?aK?qTn@oLxDgPp@yNoLz@eADL~DEJ}CrAFExCsAKeEdIg@nDY?mAG{@EIqDuFmGuJsDaEgE{BuBkAcEoFiEuDyCqDo@oAsBwAgKgCi\\_EkDYsBZwHnDgHrDgCU{\\}IgMqCuGuCgAoAi@i@iEu@sJJiIBqF}AuB_B}HPgGBqG_CqEJaN{BsSkDgBCyF|@cGjAwPhB_KTmHzBwJ[gNeCgFo@eDaAoBZq@LkEjGaBhBAnDcBlF_AfFGfBt@J~@Lp@b@hJdIf@bAr@zHs@{Hg@cAiJeIq@c@_AMu@KKzACbCGp@g@dBg@hKgDh@kAh@Od@wAkBsLx@ABA@MTcA~A{EbB_G~AcEf@wJLqBt@sGfFgFlDwFbCyK`LiErJiCtLmAfD_BdHsCl[qG|q@cA~HiEnQXlLdEhPfInM`BlLCf^kGf]mJzYuD|Ku@zDHbS|@dO?hB^HvOpAnAt@F`@xASjB\\ClEZbCr@PgAMJnHMfFu@lD@vCCrLkBtJBlBXlAbC`@d@Db@rFRbB`Aj@`CdBl@x@PlBf@pEpAvAjAdAzD|GpFjKrCbHAzCHvD|A`BpB|@x@r@EbA~@hBp@|@d@`B`BdJzBvLOlEZpB`JvL~GrFdBhDh@|CtAvBbB`C`IjEPDFDtDWhBUbDg@l@TxBrGt@xBzAPvBOjAXjAt@x@sAtAgBh@w@rAxBj@_@JO^YXKbBhAhBjDj@h@f@x@|BhEbBfA`IxEpAl@|Bc@bFWzEmBxBmEpAaA|I_@pClBxGd@zAVRjCrAvJbAjFh@fDjB~ArG`Cv@R@hBj@|D`@jC_@~A^Tf@\\bCp@~@PVa@d@wF|Db@@?FkAlA}@rAP|BYC}@DK",
)

Route.create!(
  user_id: zack.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)

Route.create!(
  user_id: eva.id,
  name: "Easter Island Trek",
  distance: 3.56,
  bounds: "{\"south\":-27.17453079868757,\"west\":-109.44104481018064,\"north\":-27.067580336719033,\"east\":-109.26646518981931}",
  polyline: "|_kdDhn}ySwGx@gBd@o@jAQjC|@dDjBdFd@jFd@hEDvEmAxJmA|BuB|@mFbBkBpAmBxGaB~BoChFs@fDKxFzDtMvBxELdAYvNCzG`@zDx@nIt@lGWtAiAZgB?{Cz@sJfHkAbBe@xAPzCy@pBeBhByBv@{C\\wCzDcJlNyD|GmCvIuCtGwD~FyDdGe@rBK`DLtA`CBlR}DxIuDvAUlPnGvHrDnElCjXfPlInFrJxB|GlDpEfF|AhDvArMpElWhClHhC|EdE~H`BnBfGrEp[zR`I|FbG|CpI`G|AxAdFxIzGtPbK|W|@pEp@pClEtJf@l@n@DdF_Cf@KnAJfAp@p@vArAnAz@ArCe@lKpA`Cp@xMfJ|FjDfKlDbKtDfIjBvNnDnC`AlBjBdIjNdC|CjAxB|GvUtIb\\xEhNxE~P`CpGjCvC|BdEnB|IlBnKbHvXzJh[zG~SdFvQ`^|pA]dCaCtG}Bg@|Bf@qErMyBhGwDrK}Lp]kE~LTk@kD}A{@]uF{B_KsEoNkNmI}IvA{F`BqGmBcADuAL}FUsDY_DpBmROw@uCyBiLqJ{AkEeAcAuFwAgAm@iCuDcFu@wJuBcCCqAe@kAiCsAyB}AkHy@aGkAiEaCoDmGwDoNsMqK}FqI_CpI~BpK|FpGnGj@l@TU|@kAPy@EwB^cY@{Eg@i@uBcDDeCUQyIyAL{Bx@gJ|H{A`UyD`JuAtEuAhKyDtAAlEf@lGtB`Cd@|FbDhATzBKxBIzEdAnErAjAMpEkAmBoKoB}I}BeEkCwCaCqGyE_QyEiNcBiGqFySvJFhTDjCBtG}AB]_Tsf@u@qBl@[bM}@xa@gDtL_A`A_@tCe@zNeBbHiAiBqDkA{B]iABySw@aCcC}K_BmIa@sC_DoKeEaHkDsHwGcEuAgAsDiFeImNoBuD{C_C}BkAoBc@cC{@iAi@yC_@o@Ik@oBIOYc@gDwKcAiAm@{Ae@qCiBy@cBGyAPcAmOSsCs@sCaF{IaCcFcJuNyHwR}BkIu@wH{AyC{EmGeAaFgBe^j@sEMmDaAyB]uDG_F|JaM`D_Nf@sDa@uDsCoGy@cA{A]gDzAqCfAmBY}BmCWqCxHeO|R_UZeCMaBy@iBsBqDWoBHmGKyBaAwDmCkJkAcByIwDmB_A_B_Cu@kCsAmDmCgCiIuEsEuH_DmEqHsBw@H_AhAsFdLoBxB{DhBw@Ly@Uy@o@WqASgDiBaKa@eGcB}F[[_BX_ExBgHbBqEnAmGrCmLzAqOfD_JG}Ge@}LcBgNmBeNoBmUeDsM_B",
  origin: "Unnamed Road, Isla de Pascua, Región de Valparaíso...",
  destination: "Camino Vaitea Anakena, Isla de Pascua, Región de V...",
)

Route.create!(
user_id: zack.id,
polyline: "y}biIxei[bCaWPmA_BgB}A}A{BiA_Ds@k@u@QOa@He@AyC}BaE}B}T_ReMjD]TIDe@ToCdC_@p@BB@D?JVxArDrK^|I`BhCp@FdDxERIxAgDvCeHwCdHyAfDSHeDyEWCGl@z@dH?fHx@~O|BjSvBhFn@zGbAt\\Tn[_AlNMjQIjHaAnGaC`JkDxGm@hBW`EDxJe@zU{B~CsFlE{HbGYrGVfBdBdDlFpTjDtSn@|KZvK|CpPjCl^Y|FcAzF`A`KlAh]JrBiA|A}BhBw@bBoA`@cCjHg@NqAi@eF]oAd@kAD}D_F_Br@}C~DiBnFmCb@{DVaFnEsAv@e@B_KbIyB`AeGlEuB`EoBrFgCrCk@dCuAxK{BzD|ATbAtQcAuQmC]oK@sCk@kDBcEkAaGp@{IdE{A`BqDjAw@d@yBjD}FjKg@DeGkKy@u@i@?oAhAa@MgCwLeAsLSqGx@mMMkFyEwPiFqFyIkD}Sia@cLuFYg@Le]eEs`@cEyRsD}FeCwC}ZiUgKmKiBmA_@v@wAvM?xD?yDvAwM^w@fF{CzBi@zAeD`EwI|H{WhLk`@jJwPhEyGlFkEbDTdEc@`Au@V}IsAqKwCqLsGmLkG_MsC}G}BuGqG{Im@yBqCuCmB{EmE{IiD_LqBaZyDqNa@gGp`@i@\\ADwJb@AlA?vAHzARlCTfCY`C}BxE}AbB?hD{@~CBpDiAzEaHa@mAmD}D}DeIkBqLGkSZwPk@oBkAw@oAq@Qe@XyGSgGmCog@xC_CjGeAMoFiEq@{HW{K]yDo@iCgAsGGiDh@aAKmGbBz@xFd@~Bh@jDP|@Q}@i@kDWyAa@qBg@mDi@Du@V_B`@eF}@oBmAoA}Ce@u@eAEiBFSQoAaEaDcH}AuHoCeGyAmEwEcGz@eNkB_Om@iCs@u@_KuGyHgIu@q@Mm@D}@AoBZs@ZWZqBf@gCr@{ABmA_BkJ?Sd@YxCqAfEmDjEoB`C}ChIgEbCuCbC_JdB{CfGiB|CEdGv@lG]xB{@~AeBzD}GvCoGzDqC~DiCbFgG`JuJrBmBf@kAx@cDnOiWVi@rBdBdHdGrDtCjFzFfFtEjNvL|IhLhJbP~GrT~DxQ`BdLp@pD|A`C`EbHn@k@o@j@FbA~@bGhFvLfCfE`@hB`@vDvCfGlK~QlIhNfCp@nD~EpE~GpBxAZdDhJt`@lJnWrLrY|DlM|Ozn@|C~LZ`@HFdMiDj@P`V|RvHvGNv@`@Pj@WhJzBfCjCY~AOpAK`Aa@xE_JkC",
bounds: "{\"south\":54.0417544235127,\"west\":-4.796547059326144,\"north\":54.20271978529799,\"east\":-4.497512940673801}",
name: "Isle of man... and Pheasants",
origin: "56 A5, Isle of Man",
destination: "106 Silverburn Cres, Isle of Man",
distance: 1.56,
)

Route.create!(
user_id: zack.id,
distance: 89.04,
origin: "Unnamed Road, Bass Lake, CA 93604, USA",
destination: "Glass Flow Rd, June Lake, CA 93529, USA",
name: "Yosemite",
bounds: "{\"south\":37.34570149144286,\"west\":-119.56430822418213,\"north\":37.781130819131455,\"east\":-118.96623998687744}",
polyline: "yeycFb{sxUoUv_@er@r[cZxl@ntLkEt\\xO~ZhMuMbPkD~s@f^rcAxDbiAzr@lk@pTpeAmExw@pMbd@{z@}IkcAuJwb@oDwMlW_SrDwT_Vg]_e@{Teh@iq@po@wLv`Bgb@lgBcd@a_Aoc@u|@u`@e}@sv@gOgRcuArJil@{q@ioA{SilAoo@nMyk@_qBbIkjByZu`@on@sCkM{q@kIk~@a`Dc\\}iBmIe|@wcB_eAxbAU`i@}o@|hBe{@paA{KdF}I_@klBnI_b@cQo[{]wh@cz@eYc[wn@{fAw\\eKgJ{XqBklAin@auAkYgQgMiz@kB{d@sXaaA}~@}r@qi@eVyo@}b@m]{Mop@yKmhAmO_{@cbA{uBua@cy@nPwZ}TmXq^{t@ecBi_@in@`Fo~Am\\ksA_TeaDtN}wFeJyiAihAksAo~Cwf@uz@y@gq@eo@gWvAuIkd@jQum@mOm^i}@yb@{QnDbKcj@VseApNokBvlBk`Cwz@gxGi_@_tAdd@eh@dkAua@zpI}_AjwCs}@hjBk|@tnBouAvz@woA~o@aHjo@ch@~xAua@xJio@uMgh@~Pe[tm@k|@xVcf@flAeeAf{CazBh}Bc~@vb@v[j_AiFrjAaQ|q@a@dc@uXbJpS~m@zr@`Zva@oH|hB|^zv@zq@vc@neA~u@rhB}c@_d@fkBDlXbEn\\cMxeA|Mn~BoJ|\\dDzeAs~AtQaTtVa`@{Kug@}Z_fAsEkl@}FaaAjUax@pb@_PlEyCmCqTju@qqB`yBo]ji@qfBppCsHh`Cd@ni@aP`oCkm@bx@ac@prAahAzlAad@j}AdU`^}Nx_@mOvMlHfd@_k@aIuj@|]geAfF}o@u@ekBnq@yn@z_@kZfRxy@vj@v{@vp@qUpIaS~ZmCrKh]d}@_Blj@xQhaAhuBf{DxnBrvDbz@gB~dBuQjY`t@rKd`AwNzm@|Hh|@og@juAd[r}@fZ`c@gVhg@{`@jVtAtf@wChPvy@jl@h^b}AkNptAxRpsAzNpm@vg@zd@j\\nr@`bA`h@|gBgSpMcE~WkJrg@alAth@}r@_Gif@xZoeApg@y^r\\nKvVhx@d`@bg@tfBFz|Cd^TjfAlZ|p@bm@[fV|z@cMfeB~d@bgBhw@yUx`@pcBha@|`AcIhh@jJbf@pIxb@bp@bShp@j|Ahp@fgAnMfNbRu`A~Uky@l[ytBpZcCbBfV|a@rO|a@t|@la@i\\hsCj^w@ui@xDa|@k[geAoq@uf@XslAi_@whAoFqYhRqOnDwNs\\cQae@qT~nAodA|TsW",
)

Route.create!(
  user_id: zack.id,
  name: "Naples Vesuvio Trip",
  distance: 10.1,
  origin: "80056 Ercolano, Metropolitan City of Naples, Italy",
  destination: "Via Rivo Carotenuto, 55, 80041 Boscoreale NA, Ital...",
  bounds: "{\"south\":40.77534792842381,\"west\":14.350321470336894,\"north\":40.87926256793733,\"east\":14.499838529663066}",
  polyline: "kqdxF}gtvA}Dc@e@vFIn@t@|F~B|G`@bIz\\uStFeGpHqSx@{@xGkCn[yJdFk@rGOdHuCbIyDzLqDpEeBrEwEhCoBz@u@n@f@\\Z\\L|AZdCxBnCNjAr@`@h@v@Ut@u@zAk@nC_@~AkAjEbEfJbJj@f@xBnB~@}AnE_GnCqDhGmIr@w@fCe@`DyAjE}DvCPx@RfAkC~AgEl@aBjAaE|D_NVm@jDaJxOec@vKkYzOwd@gUsHaIoCGkBrBaZwEgLgBcAyCZkI~@eCo@eByBcAsDi@iCj@aMfAcEbAkF_@}Cc@mBPgDl@_BNgAHq@w@m@fA_ETgA|@}EzAmI^wClCcLp@qGv@aFFe@\\_CsAgAmCaCIEkDu@iAGr@}OZyD`BqI^}LjBwJd@mEE}Mf@mJvB}YMwBGOAOH{CWeH{BcQmGkLqFuJ?aK?qTn@oLxDgPp@yNoLz@eADL~DEJ}CrAFExCsAKeEdIg@nDY?mAG{@EIqDuFmGuJsDaEgE{BuBkAcEoFiEuDyCqDo@oAsBwAgKgCi\\_EkDYsBZwHnDgHrDgCU{\\}IgMqCuGuCgAoAi@i@iEu@sJJiIBqF}AuB_B}HPgGBqG_CqEJaN{BsSkDgBCyF|@cGjAwPhB_KTmHzBwJ[gNeCgFo@eDaAoBZq@LkEjGaBhBAnDcBlF_AfFGfBt@J~@Lp@b@hJdIf@bAr@zHs@{Hg@cAiJeIq@c@_AMu@KKzACbCGp@g@dBg@hKgDh@kAh@Od@wAkBsLx@ABA@MTcA~A{EbB_G~AcEf@wJLqBt@sGfFgFlDwFbCyK`LiErJiCtLmAfD_BdHsCl[qG|q@cA~HiEnQXlLdEhPfInM`BlLCf^kGf]mJzYuD|Ku@zDHbS|@dO?hB^HvOpAnAt@F`@xASjB\\ClEZbCr@PgAMJnHMfFu@lD@vCCrLkBtJBlBXlAbC`@d@Db@rFRbB`Aj@`CdBl@x@PlBf@pEpAvAjAdAzD|GpFjKrCbHAzCHvD|A`BpB|@x@r@EbA~@hBp@|@d@`B`BdJzBvLOlEZpB`JvL~GrFdBhDh@|CtAvBbB`C`IjEPDFDtDWhBUbDg@l@TxBrGt@xBzAPvBOjAXjAt@x@sAtAgBh@w@rAxBj@_@JO^YXKbBhAhBjDj@h@f@x@|BhEbBfA`IxEpAl@|Bc@bFWzEmBxBmEpAaA|I_@pClBxGd@zAVRjCrAvJbAjFh@fDjB~ArG`Cv@R@hBj@|D`@jC_@~A^Tf@\\bCp@~@PVa@d@wF|Db@@?FkAlA}@rAP|BYC}@DK",
)

Route.create!(
  user_id: zack.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)

Route.create!(
  user_id: eva.id,
  name: "Easter Island Trek",
  distance: 3.56,
  bounds: "{\"south\":-27.17453079868757,\"west\":-109.44104481018064,\"north\":-27.067580336719033,\"east\":-109.26646518981931}",
  polyline: "|_kdDhn}ySwGx@gBd@o@jAQjC|@dDjBdFd@jFd@hEDvEmAxJmA|BuB|@mFbBkBpAmBxGaB~BoChFs@fDKxFzDtMvBxELdAYvNCzG`@zDx@nIt@lGWtAiAZgB?{Cz@sJfHkAbBe@xAPzCy@pBeBhByBv@{C\\wCzDcJlNyD|GmCvIuCtGwD~FyDdGe@rBK`DLtA`CBlR}DxIuDvAUlPnGvHrDnElCjXfPlInFrJxB|GlDpEfF|AhDvArMpElWhClHhC|EdE~H`BnBfGrEp[zR`I|FbG|CpI`G|AxAdFxIzGtPbK|W|@pEp@pClEtJf@l@n@DdF_Cf@KnAJfAp@p@vArAnAz@ArCe@lKpA`Cp@xMfJ|FjDfKlDbKtDfIjBvNnDnC`AlBjBdIjNdC|CjAxB|GvUtIb\\xEhNxE~P`CpGjCvC|BdEnB|IlBnKbHvXzJh[zG~SdFvQ`^|pA]dCaCtG}Bg@|Bf@qErMyBhGwDrK}Lp]kE~LTk@kD}A{@]uF{B_KsEoNkNmI}IvA{F`BqGmBcADuAL}FUsDY_DpBmROw@uCyBiLqJ{AkEeAcAuFwAgAm@iCuDcFu@wJuBcCCqAe@kAiCsAyB}AkHy@aGkAiEaCoDmGwDoNsMqK}FqI_CpI~BpK|FpGnGj@l@TU|@kAPy@EwB^cY@{Eg@i@uBcDDeCUQyIyAL{Bx@gJ|H{A`UyD`JuAtEuAhKyDtAAlEf@lGtB`Cd@|FbDhATzBKxBIzEdAnErAjAMpEkAmBoKoB}I}BeEkCwCaCqGyE_QyEiNcBiGqFySvJFhTDjCBtG}AB]_Tsf@u@qBl@[bM}@xa@gDtL_A`A_@tCe@zNeBbHiAiBqDkA{B]iABySw@aCcC}K_BmIa@sC_DoKeEaHkDsHwGcEuAgAsDiFeImNoBuD{C_C}BkAoBc@cC{@iAi@yC_@o@Ik@oBIOYc@gDwKcAiAm@{Ae@qCiBy@cBGyAPcAmOSsCs@sCaF{IaCcFcJuNyHwR}BkIu@wH{AyC{EmGeAaFgBe^j@sEMmDaAyB]uDG_F|JaM`D_Nf@sDa@uDsCoGy@cA{A]gDzAqCfAmBY}BmCWqCxHeO|R_UZeCMaBy@iBsBqDWoBHmGKyBaAwDmCkJkAcByIwDmB_A_B_Cu@kCsAmDmCgCiIuEsEuH_DmEqHsBw@H_AhAsFdLoBxB{DhBw@Ly@Uy@o@WqASgDiBaKa@eGcB}F[[_BX_ExBgHbBqEnAmGrCmLzAqOfD_JG}Ge@}LcBgNmBeNoBmUeDsM_B",
  origin: "Unnamed Road, Isla de Pascua, Región de Valparaíso...",
  destination: "Camino Vaitea Anakena, Isla de Pascua, Región de V...",
)

Route.create!(
user_id: zack.id,
polyline: "y}biIxei[bCaWPmA_BgB}A}A{BiA_Ds@k@u@QOa@He@AyC}BaE}B}T_ReMjD]TIDe@ToCdC_@p@BB@D?JVxArDrK^|I`BhCp@FdDxERIxAgDvCeHwCdHyAfDSHeDyEWCGl@z@dH?fHx@~O|BjSvBhFn@zGbAt\\Tn[_AlNMjQIjHaAnGaC`JkDxGm@hBW`EDxJe@zU{B~CsFlE{HbGYrGVfBdBdDlFpTjDtSn@|KZvK|CpPjCl^Y|FcAzF`A`KlAh]JrBiA|A}BhBw@bBoA`@cCjHg@NqAi@eF]oAd@kAD}D_F_Br@}C~DiBnFmCb@{DVaFnEsAv@e@B_KbIyB`AeGlEuB`EoBrFgCrCk@dCuAxK{BzD|ATbAtQcAuQmC]oK@sCk@kDBcEkAaGp@{IdE{A`BqDjAw@d@yBjD}FjKg@DeGkKy@u@i@?oAhAa@MgCwLeAsLSqGx@mMMkFyEwPiFqFyIkD}Sia@cLuFYg@Le]eEs`@cEyRsD}FeCwC}ZiUgKmKiBmA_@v@wAvM?xD?yDvAwM^w@fF{CzBi@zAeD`EwI|H{WhLk`@jJwPhEyGlFkEbDTdEc@`Au@V}IsAqKwCqLsGmLkG_MsC}G}BuGqG{Im@yBqCuCmB{EmE{IiD_LqBaZyDqNa@gGp`@i@\\ADwJb@AlA?vAHzARlCTfCY`C}BxE}AbB?hD{@~CBpDiAzEaHa@mAmD}D}DeIkBqLGkSZwPk@oBkAw@oAq@Qe@XyGSgGmCog@xC_CjGeAMoFiEq@{HW{K]yDo@iCgAsGGiDh@aAKmGbBz@xFd@~Bh@jDP|@Q}@i@kDWyAa@qBg@mDi@Du@V_B`@eF}@oBmAoA}Ce@u@eAEiBFSQoAaEaDcH}AuHoCeGyAmEwEcGz@eNkB_Om@iCs@u@_KuGyHgIu@q@Mm@D}@AoBZs@ZWZqBf@gCr@{ABmA_BkJ?Sd@YxCqAfEmDjEoB`C}ChIgEbCuCbC_JdB{CfGiB|CEdGv@lG]xB{@~AeBzD}GvCoGzDqC~DiCbFgG`JuJrBmBf@kAx@cDnOiWVi@rBdBdHdGrDtCjFzFfFtEjNvL|IhLhJbP~GrT~DxQ`BdLp@pD|A`C`EbHn@k@o@j@FbA~@bGhFvLfCfE`@hB`@vDvCfGlK~QlIhNfCp@nD~EpE~GpBxAZdDhJt`@lJnWrLrY|DlM|Ozn@|C~LZ`@HFdMiDj@P`V|RvHvGNv@`@Pj@WhJzBfCjCY~AOpAK`Aa@xE_JkC",
bounds: "{\"south\":54.0417544235127,\"west\":-4.796547059326144,\"north\":54.20271978529799,\"east\":-4.497512940673801}",
name: "Isle of man... and Pheasants",
origin: "56 A5, Isle of Man",
destination: "106 Silverburn Cres, Isle of Man",
distance: 1.56,
)

Route.create!(
user_id: zack.id,
distance: 89.04,
origin: "Unnamed Road, Bass Lake, CA 93604, USA",
destination: "Glass Flow Rd, June Lake, CA 93529, USA",
name: "Yosemite",
bounds: "{\"south\":37.34570149144286,\"west\":-119.56430822418213,\"north\":37.781130819131455,\"east\":-118.96623998687744}",
polyline: "yeycFb{sxUoUv_@er@r[cZxl@ntLkEt\\xO~ZhMuMbPkD~s@f^rcAxDbiAzr@lk@pTpeAmExw@pMbd@{z@}IkcAuJwb@oDwMlW_SrDwT_Vg]_e@{Teh@iq@po@wLv`Bgb@lgBcd@a_Aoc@u|@u`@e}@sv@gOgRcuArJil@{q@ioA{SilAoo@nMyk@_qBbIkjByZu`@on@sCkM{q@kIk~@a`Dc\\}iBmIe|@wcB_eAxbAU`i@}o@|hBe{@paA{KdF}I_@klBnI_b@cQo[{]wh@cz@eYc[wn@{fAw\\eKgJ{XqBklAin@auAkYgQgMiz@kB{d@sXaaA}~@}r@qi@eVyo@}b@m]{Mop@yKmhAmO_{@cbA{uBua@cy@nPwZ}TmXq^{t@ecBi_@in@`Fo~Am\\ksA_TeaDtN}wFeJyiAihAksAo~Cwf@uz@y@gq@eo@gWvAuIkd@jQum@mOm^i}@yb@{QnDbKcj@VseApNokBvlBk`Cwz@gxGi_@_tAdd@eh@dkAua@zpI}_AjwCs}@hjBk|@tnBouAvz@woA~o@aHjo@ch@~xAua@xJio@uMgh@~Pe[tm@k|@xVcf@flAeeAf{CazBh}Bc~@vb@v[j_AiFrjAaQ|q@a@dc@uXbJpS~m@zr@`Zva@oH|hB|^zv@zq@vc@neA~u@rhB}c@_d@fkBDlXbEn\\cMxeA|Mn~BoJ|\\dDzeAs~AtQaTtVa`@{Kug@}Z_fAsEkl@}FaaAjUax@pb@_PlEyCmCqTju@qqB`yBo]ji@qfBppCsHh`Cd@ni@aP`oCkm@bx@ac@prAahAzlAad@j}AdU`^}Nx_@mOvMlHfd@_k@aIuj@|]geAfF}o@u@ekBnq@yn@z_@kZfRxy@vj@v{@vp@qUpIaS~ZmCrKh]d}@_Blj@xQhaAhuBf{DxnBrvDbz@gB~dBuQjY`t@rKd`AwNzm@|Hh|@og@juAd[r}@fZ`c@gVhg@{`@jVtAtf@wChPvy@jl@h^b}AkNptAxRpsAzNpm@vg@zd@j\\nr@`bA`h@|gBgSpMcE~WkJrg@alAth@}r@_Gif@xZoeApg@y^r\\nKvVhx@d`@bg@tfBFz|Cd^TjfAlZ|p@bm@[fV|z@cMfeB~d@bgBhw@yUx`@pcBha@|`AcIhh@jJbf@pIxb@bp@bShp@j|Ahp@fgAnMfNbRu`A~Uky@l[ytBpZcCbBfV|a@rO|a@t|@la@i\\hsCj^w@ui@xDa|@k[geAoq@uf@XslAi_@whAoFqYhRqOnDwNs\\cQae@qT~nAodA|TsW",
)

Route.create!(
  user_id: zack.id,
  name: "Naples Vesuvio Trip",
  distance: 10.1,
  origin: "80056 Ercolano, Metropolitan City of Naples, Italy",
  destination: "Via Rivo Carotenuto, 55, 80041 Boscoreale NA, Ital...",
  bounds: "{\"south\":40.77534792842381,\"west\":14.350321470336894,\"north\":40.87926256793733,\"east\":14.499838529663066}",
  polyline: "kqdxF}gtvA}Dc@e@vFIn@t@|F~B|G`@bIz\\uStFeGpHqSx@{@xGkCn[yJdFk@rGOdHuCbIyDzLqDpEeBrEwEhCoBz@u@n@f@\\Z\\L|AZdCxBnCNjAr@`@h@v@Ut@u@zAk@nC_@~AkAjEbEfJbJj@f@xBnB~@}AnE_GnCqDhGmIr@w@fCe@`DyAjE}DvCPx@RfAkC~AgEl@aBjAaE|D_NVm@jDaJxOec@vKkYzOwd@gUsHaIoCGkBrBaZwEgLgBcAyCZkI~@eCo@eByBcAsDi@iCj@aMfAcEbAkF_@}Cc@mBPgDl@_BNgAHq@w@m@fA_ETgA|@}EzAmI^wClCcLp@qGv@aFFe@\\_CsAgAmCaCIEkDu@iAGr@}OZyD`BqI^}LjBwJd@mEE}Mf@mJvB}YMwBGOAOH{CWeH{BcQmGkLqFuJ?aK?qTn@oLxDgPp@yNoLz@eADL~DEJ}CrAFExCsAKeEdIg@nDY?mAG{@EIqDuFmGuJsDaEgE{BuBkAcEoFiEuDyCqDo@oAsBwAgKgCi\\_EkDYsBZwHnDgHrDgCU{\\}IgMqCuGuCgAoAi@i@iEu@sJJiIBqF}AuB_B}HPgGBqG_CqEJaN{BsSkDgBCyF|@cGjAwPhB_KTmHzBwJ[gNeCgFo@eDaAoBZq@LkEjGaBhBAnDcBlF_AfFGfBt@J~@Lp@b@hJdIf@bAr@zHs@{Hg@cAiJeIq@c@_AMu@KKzACbCGp@g@dBg@hKgDh@kAh@Od@wAkBsLx@ABA@MTcA~A{EbB_G~AcEf@wJLqBt@sGfFgFlDwFbCyK`LiErJiCtLmAfD_BdHsCl[qG|q@cA~HiEnQXlLdEhPfInM`BlLCf^kGf]mJzYuD|Ku@zDHbS|@dO?hB^HvOpAnAt@F`@xASjB\\ClEZbCr@PgAMJnHMfFu@lD@vCCrLkBtJBlBXlAbC`@d@Db@rFRbB`Aj@`CdBl@x@PlBf@pEpAvAjAdAzD|GpFjKrCbHAzCHvD|A`BpB|@x@r@EbA~@hBp@|@d@`B`BdJzBvLOlEZpB`JvL~GrFdBhDh@|CtAvBbB`C`IjEPDFDtDWhBUbDg@l@TxBrGt@xBzAPvBOjAXjAt@x@sAtAgBh@w@rAxBj@_@JO^YXKbBhAhBjDj@h@f@x@|BhEbBfA`IxEpAl@|Bc@bFWzEmBxBmEpAaA|I_@pClBxGd@zAVRjCrAvJbAjFh@fDjB~ArG`Cv@R@hBj@|D`@jC_@~A^Tf@\\bCp@~@PVa@d@wF|Db@@?FkAlA}@rAP|BYC}@DK",
)

Route.create!(
  user_id: zack.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)

Route.create!(
  user_id: eva.id,
  name: "Easter Island Trek",
  distance: 3.56,
  bounds: "{\"south\":-27.17453079868757,\"west\":-109.44104481018064,\"north\":-27.067580336719033,\"east\":-109.26646518981931}",
  polyline: "|_kdDhn}ySwGx@gBd@o@jAQjC|@dDjBdFd@jFd@hEDvEmAxJmA|BuB|@mFbBkBpAmBxGaB~BoChFs@fDKxFzDtMvBxELdAYvNCzG`@zDx@nIt@lGWtAiAZgB?{Cz@sJfHkAbBe@xAPzCy@pBeBhByBv@{C\\wCzDcJlNyD|GmCvIuCtGwD~FyDdGe@rBK`DLtA`CBlR}DxIuDvAUlPnGvHrDnElCjXfPlInFrJxB|GlDpEfF|AhDvArMpElWhClHhC|EdE~H`BnBfGrEp[zR`I|FbG|CpI`G|AxAdFxIzGtPbK|W|@pEp@pClEtJf@l@n@DdF_Cf@KnAJfAp@p@vArAnAz@ArCe@lKpA`Cp@xMfJ|FjDfKlDbKtDfIjBvNnDnC`AlBjBdIjNdC|CjAxB|GvUtIb\\xEhNxE~P`CpGjCvC|BdEnB|IlBnKbHvXzJh[zG~SdFvQ`^|pA]dCaCtG}Bg@|Bf@qErMyBhGwDrK}Lp]kE~LTk@kD}A{@]uF{B_KsEoNkNmI}IvA{F`BqGmBcADuAL}FUsDY_DpBmROw@uCyBiLqJ{AkEeAcAuFwAgAm@iCuDcFu@wJuBcCCqAe@kAiCsAyB}AkHy@aGkAiEaCoDmGwDoNsMqK}FqI_CpI~BpK|FpGnGj@l@TU|@kAPy@EwB^cY@{Eg@i@uBcDDeCUQyIyAL{Bx@gJ|H{A`UyD`JuAtEuAhKyDtAAlEf@lGtB`Cd@|FbDhATzBKxBIzEdAnErAjAMpEkAmBoKoB}I}BeEkCwCaCqGyE_QyEiNcBiGqFySvJFhTDjCBtG}AB]_Tsf@u@qBl@[bM}@xa@gDtL_A`A_@tCe@zNeBbHiAiBqDkA{B]iABySw@aCcC}K_BmIa@sC_DoKeEaHkDsHwGcEuAgAsDiFeImNoBuD{C_C}BkAoBc@cC{@iAi@yC_@o@Ik@oBIOYc@gDwKcAiAm@{Ae@qCiBy@cBGyAPcAmOSsCs@sCaF{IaCcFcJuNyHwR}BkIu@wH{AyC{EmGeAaFgBe^j@sEMmDaAyB]uDG_F|JaM`D_Nf@sDa@uDsCoGy@cA{A]gDzAqCfAmBY}BmCWqCxHeO|R_UZeCMaBy@iBsBqDWoBHmGKyBaAwDmCkJkAcByIwDmB_A_B_Cu@kCsAmDmCgCiIuEsEuH_DmEqHsBw@H_AhAsFdLoBxB{DhBw@Ly@Uy@o@WqASgDiBaKa@eGcB}F[[_BX_ExBgHbBqEnAmGrCmLzAqOfD_JG}Ge@}LcBgNmBeNoBmUeDsM_B",
  origin: "Unnamed Road, Isla de Pascua, Región de Valparaíso...",
  destination: "Camino Vaitea Anakena, Isla de Pascua, Región de V...",
)

Route.create!(
user_id: zack.id,
polyline: "y}biIxei[bCaWPmA_BgB}A}A{BiA_Ds@k@u@QOa@He@AyC}BaE}B}T_ReMjD]TIDe@ToCdC_@p@BB@D?JVxArDrK^|I`BhCp@FdDxERIxAgDvCeHwCdHyAfDSHeDyEWCGl@z@dH?fHx@~O|BjSvBhFn@zGbAt\\Tn[_AlNMjQIjHaAnGaC`JkDxGm@hBW`EDxJe@zU{B~CsFlE{HbGYrGVfBdBdDlFpTjDtSn@|KZvK|CpPjCl^Y|FcAzF`A`KlAh]JrBiA|A}BhBw@bBoA`@cCjHg@NqAi@eF]oAd@kAD}D_F_Br@}C~DiBnFmCb@{DVaFnEsAv@e@B_KbIyB`AeGlEuB`EoBrFgCrCk@dCuAxK{BzD|ATbAtQcAuQmC]oK@sCk@kDBcEkAaGp@{IdE{A`BqDjAw@d@yBjD}FjKg@DeGkKy@u@i@?oAhAa@MgCwLeAsLSqGx@mMMkFyEwPiFqFyIkD}Sia@cLuFYg@Le]eEs`@cEyRsD}FeCwC}ZiUgKmKiBmA_@v@wAvM?xD?yDvAwM^w@fF{CzBi@zAeD`EwI|H{WhLk`@jJwPhEyGlFkEbDTdEc@`Au@V}IsAqKwCqLsGmLkG_MsC}G}BuGqG{Im@yBqCuCmB{EmE{IiD_LqBaZyDqNa@gGp`@i@\\ADwJb@AlA?vAHzARlCTfCY`C}BxE}AbB?hD{@~CBpDiAzEaHa@mAmD}D}DeIkBqLGkSZwPk@oBkAw@oAq@Qe@XyGSgGmCog@xC_CjGeAMoFiEq@{HW{K]yDo@iCgAsGGiDh@aAKmGbBz@xFd@~Bh@jDP|@Q}@i@kDWyAa@qBg@mDi@Du@V_B`@eF}@oBmAoA}Ce@u@eAEiBFSQoAaEaDcH}AuHoCeGyAmEwEcGz@eNkB_Om@iCs@u@_KuGyHgIu@q@Mm@D}@AoBZs@ZWZqBf@gCr@{ABmA_BkJ?Sd@YxCqAfEmDjEoB`C}ChIgEbCuCbC_JdB{CfGiB|CEdGv@lG]xB{@~AeBzD}GvCoGzDqC~DiCbFgG`JuJrBmBf@kAx@cDnOiWVi@rBdBdHdGrDtCjFzFfFtEjNvL|IhLhJbP~GrT~DxQ`BdLp@pD|A`C`EbHn@k@o@j@FbA~@bGhFvLfCfE`@hB`@vDvCfGlK~QlIhNfCp@nD~EpE~GpBxAZdDhJt`@lJnWrLrY|DlM|Ozn@|C~LZ`@HFdMiDj@P`V|RvHvGNv@`@Pj@WhJzBfCjCY~AOpAK`Aa@xE_JkC",
bounds: "{\"south\":54.0417544235127,\"west\":-4.796547059326144,\"north\":54.20271978529799,\"east\":-4.497512940673801}",
name: "Isle of man... and Pheasants",
origin: "56 A5, Isle of Man",
destination: "106 Silverburn Cres, Isle of Man",
distance: 1.56,
)

Route.create!(
user_id: zack.id,
distance: 89.04,
origin: "Unnamed Road, Bass Lake, CA 93604, USA",
destination: "Glass Flow Rd, June Lake, CA 93529, USA",
name: "Yosemite",
bounds: "{\"south\":37.34570149144286,\"west\":-119.56430822418213,\"north\":37.781130819131455,\"east\":-118.96623998687744}",
polyline: "yeycFb{sxUoUv_@er@r[cZxl@ntLkEt\\xO~ZhMuMbPkD~s@f^rcAxDbiAzr@lk@pTpeAmExw@pMbd@{z@}IkcAuJwb@oDwMlW_SrDwT_Vg]_e@{Teh@iq@po@wLv`Bgb@lgBcd@a_Aoc@u|@u`@e}@sv@gOgRcuArJil@{q@ioA{SilAoo@nMyk@_qBbIkjByZu`@on@sCkM{q@kIk~@a`Dc\\}iBmIe|@wcB_eAxbAU`i@}o@|hBe{@paA{KdF}I_@klBnI_b@cQo[{]wh@cz@eYc[wn@{fAw\\eKgJ{XqBklAin@auAkYgQgMiz@kB{d@sXaaA}~@}r@qi@eVyo@}b@m]{Mop@yKmhAmO_{@cbA{uBua@cy@nPwZ}TmXq^{t@ecBi_@in@`Fo~Am\\ksA_TeaDtN}wFeJyiAihAksAo~Cwf@uz@y@gq@eo@gWvAuIkd@jQum@mOm^i}@yb@{QnDbKcj@VseApNokBvlBk`Cwz@gxGi_@_tAdd@eh@dkAua@zpI}_AjwCs}@hjBk|@tnBouAvz@woA~o@aHjo@ch@~xAua@xJio@uMgh@~Pe[tm@k|@xVcf@flAeeAf{CazBh}Bc~@vb@v[j_AiFrjAaQ|q@a@dc@uXbJpS~m@zr@`Zva@oH|hB|^zv@zq@vc@neA~u@rhB}c@_d@fkBDlXbEn\\cMxeA|Mn~BoJ|\\dDzeAs~AtQaTtVa`@{Kug@}Z_fAsEkl@}FaaAjUax@pb@_PlEyCmCqTju@qqB`yBo]ji@qfBppCsHh`Cd@ni@aP`oCkm@bx@ac@prAahAzlAad@j}AdU`^}Nx_@mOvMlHfd@_k@aIuj@|]geAfF}o@u@ekBnq@yn@z_@kZfRxy@vj@v{@vp@qUpIaS~ZmCrKh]d}@_Blj@xQhaAhuBf{DxnBrvDbz@gB~dBuQjY`t@rKd`AwNzm@|Hh|@og@juAd[r}@fZ`c@gVhg@{`@jVtAtf@wChPvy@jl@h^b}AkNptAxRpsAzNpm@vg@zd@j\\nr@`bA`h@|gBgSpMcE~WkJrg@alAth@}r@_Gif@xZoeApg@y^r\\nKvVhx@d`@bg@tfBFz|Cd^TjfAlZ|p@bm@[fV|z@cMfeB~d@bgBhw@yUx`@pcBha@|`AcIhh@jJbf@pIxb@bp@bShp@j|Ahp@fgAnMfNbRu`A~Uky@l[ytBpZcCbBfV|a@rO|a@t|@la@i\\hsCj^w@ui@xDa|@k[geAoq@uf@XslAi_@whAoFqYhRqOnDwNs\\cQae@qT~nAodA|TsW",
)

Route.create!(
  user_id: zack.id,
  name: "Naples Vesuvio Trip",
  distance: 10.1,
  origin: "80056 Ercolano, Metropolitan City of Naples, Italy",
  destination: "Via Rivo Carotenuto, 55, 80041 Boscoreale NA, Ital...",
  bounds: "{\"south\":40.77534792842381,\"west\":14.350321470336894,\"north\":40.87926256793733,\"east\":14.499838529663066}",
  polyline: "kqdxF}gtvA}Dc@e@vFIn@t@|F~B|G`@bIz\\uStFeGpHqSx@{@xGkCn[yJdFk@rGOdHuCbIyDzLqDpEeBrEwEhCoBz@u@n@f@\\Z\\L|AZdCxBnCNjAr@`@h@v@Ut@u@zAk@nC_@~AkAjEbEfJbJj@f@xBnB~@}AnE_GnCqDhGmIr@w@fCe@`DyAjE}DvCPx@RfAkC~AgEl@aBjAaE|D_NVm@jDaJxOec@vKkYzOwd@gUsHaIoCGkBrBaZwEgLgBcAyCZkI~@eCo@eByBcAsDi@iCj@aMfAcEbAkF_@}Cc@mBPgDl@_BNgAHq@w@m@fA_ETgA|@}EzAmI^wClCcLp@qGv@aFFe@\\_CsAgAmCaCIEkDu@iAGr@}OZyD`BqI^}LjBwJd@mEE}Mf@mJvB}YMwBGOAOH{CWeH{BcQmGkLqFuJ?aK?qTn@oLxDgPp@yNoLz@eADL~DEJ}CrAFExCsAKeEdIg@nDY?mAG{@EIqDuFmGuJsDaEgE{BuBkAcEoFiEuDyCqDo@oAsBwAgKgCi\\_EkDYsBZwHnDgHrDgCU{\\}IgMqCuGuCgAoAi@i@iEu@sJJiIBqF}AuB_B}HPgGBqG_CqEJaN{BsSkDgBCyF|@cGjAwPhB_KTmHzBwJ[gNeCgFo@eDaAoBZq@LkEjGaBhBAnDcBlF_AfFGfBt@J~@Lp@b@hJdIf@bAr@zHs@{Hg@cAiJeIq@c@_AMu@KKzACbCGp@g@dBg@hKgDh@kAh@Od@wAkBsLx@ABA@MTcA~A{EbB_G~AcEf@wJLqBt@sGfFgFlDwFbCyK`LiErJiCtLmAfD_BdHsCl[qG|q@cA~HiEnQXlLdEhPfInM`BlLCf^kGf]mJzYuD|Ku@zDHbS|@dO?hB^HvOpAnAt@F`@xASjB\\ClEZbCr@PgAMJnHMfFu@lD@vCCrLkBtJBlBXlAbC`@d@Db@rFRbB`Aj@`CdBl@x@PlBf@pEpAvAjAdAzD|GpFjKrCbHAzCHvD|A`BpB|@x@r@EbA~@hBp@|@d@`B`BdJzBvLOlEZpB`JvL~GrFdBhDh@|CtAvBbB`C`IjEPDFDtDWhBUbDg@l@TxBrGt@xBzAPvBOjAXjAt@x@sAtAgBh@w@rAxBj@_@JO^YXKbBhAhBjDj@h@f@x@|BhEbBfA`IxEpAl@|Bc@bFWzEmBxBmEpAaA|I_@pClBxGd@zAVRjCrAvJbAjFh@fDjB~ArG`Cv@R@hBj@|D`@jC_@~A^Tf@\\bCp@~@PVa@d@wF|Db@@?FkAlA}@rAP|BYC}@DK",
)

Route.create!(
  user_id: zack.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)
