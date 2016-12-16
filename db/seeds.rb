require 'faker'

User.destroy_all

zack = User.create!(
first_name: "Zack",
last_name: "Yu",
email: "demo_account@admin.com",
password: "password"
)

michael = User.create!(
first_name: "Michael",
last_name: "East",
email: "blue@gmail.com",
password: "password"
)

lucy = User.create!(
first_name: "Lucy",
last_name: "Blanc",
email: "lucy@gmail.com",
password: "password"
)

irene = User.create!(
first_name: "Irene",
last_name: "Grigio",
email: "irene@gmail.com",
password: "password"
)

fabio = User.create!(
first_name: "Fabio",
last_name: "Pinot",
email: "fabbio@gmail.com",
password: "password"
)

max = User.create!(
first_name: "Max",
last_name: "Hempfling-san",
email: "max@gmail.com",
password: "password",
)

bruce = User.create!(
first_name: "Bruce",
last_name: "Wang",
email: "bruce@gmail.com",
password: "password"
)

kinko = User.create!(
first_name: "Kinko",
last_name: "Want",
email: "kinko@gmail.com",
password: "password"
)

robb = User.create!(
first_name: "Robb",
last_name: "Veltman",
email: "robb@gmail.com",
password: "password"
)

daniel = User.create!(
first_name: "Daniel",
last_name: "Veltman",
email: "daniel@gmail.com",
password: "password"
)

megan = User.create!(
first_name: "Megan",
last_name: "Eagle",
email: "megan@gmail.com",
password: "password"
)

catherine = User.create!(
  first_name: "Catherine",
  last_name: "Eagle",
  email: "catherine@gmail.com",
  password: "password"
)

fannie = User.create!(
  first_name: "Fannie",
  last_name: "Chan",
  email: "fannie@gmail.com",
  password: "password"
)

agnes = User.create!(
  first_name: "Agnes",
  last_name: "Wan",
  email: "agnes@gmail.com",
  password: "password"
)

scarlet = User.create!(
  first_name: "Scarlet",
  last_name: "Johansson",
  email: "scarlet@gmail.com",
  password: "password"
)

jessica = User.create!(
  first_name: "Jessica",
  last_name: "Biel",
  email: "jessica@gmail.com",
  password: "password"
)

mila = User.create!(
  first_name: "Mila",
  last_name: "Kunis",
  email: "mila@gmail.com",
  password: "password"
)

emmanuelle = User.create!(
  first_name: "Emmanuelle",
  last_name: "Chriqui",
  email: "emmanuelle@gmail.com",
  password: "password"
)

christina = User.create!(
  first_name: "Christina",
  last_name: "Johansson",
  email: "christina@gmail.com",
  password: "password"
)

eva = User.create!(
  first_name: "Eva",
  last_name: "Mendes",
  email: "eva@gmail.com",
  password: "password"
)

olivia = User.create!(
  first_name: "Olivia",
  last_name: "Wilde",
  email: "olivia@gmail.com",
  password: "password"
)

meagan = User.create!(
  first_name: "Meagan",
  last_name: "Good",
  email: "meagan@gmail.com",
  password: "password"
)

bethany = User.create!(
  first_name: "Bethany",
  last_name: "Mango",
  email: "forgetthemango@gmail.com",
  password: "password",
)

christian = User.create!(
  first_name: "Christian",
  last_name: "Tang",
  email: "christian@gmail.com",
  password: "password",
)


Friendship.destroy_all

Friendship.create!(
  user: zack,
  friend: michael,
  status: 'accepted'
)

Friendship.create!(
user: zack,
friend: lucy,
status: 'accepted'
)

Friendship.create!(
  user: irene,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: fabio,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: bruce,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: kinko,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: bethany,
  friend: zack,
  status: 'accepted',
)

Friendship.create!(
  user: max,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: robb,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: daniel,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: megan,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: scarlet,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: jessica,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: mila,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: emmanuelle,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: christina,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: eva,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: olivia,
  friend: zack,
  status: 'accepted'
)

Friendship.create!(
  user: meagan,
  friend: zack,
  status: 'pending'
)

Friendship.create!(
  user: christian,
  friend: zack,
  status: 'accepted'
)

pokehunt = Route.create!(
  user_id: olivia.id,
  name: "PokeHunt",
  distance: 0.03,
  polyline: "urp~Cly`iNBKDCH?RFd@Bp@Kr@DfAJNA`@OVAL?JFHJ@HAb@Bb@T`B@\\ORKT?\\Zf@BPAFAJQFQCUYMIO?W?QGEK?MDcAAOKEQ?O@W?S?]_@GCMEg@MMMCOE_@CYMW]a@",
  origin: "Deicke Park Trail, Plantation, FL 33322, USA",
  destination: "Deicke Park Trail, Plantation, FL 33322, USA",
  bounds: "{\"south\":26.13807947730626,\"west\":-80.29455780656815,\"north\":26.141450506670363,\"east\":-80.28910219343186}",
)

pokehunt.comments.create!(
  body: "Did you catch anything?!",
  user_id: zack.id,
)

pokehunt.comments.create!(
  body: "I caught 5 caterpies...",
  user_id: olivia.id,
)

pokehunt.comments.create!(
  body: "Hahaha",
  user_id: max.id,
)

# Comment.create!(body: Faker::Lorem.paragraph(3), user_id: bruce.id, commentable_id: 1, commentable_type: "Route")
# Comment.create!(body: Faker::Lorem.paragraph(3), user_id: rob.id, commentable_id: 1, commentable_type: "Route")


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

lago_di_bracciano = Route.create!(
  user_id: eva.id,
  polyline: "y||_GuckiAe@k@?sCTO~AoFdCkHHOTFfIlFbBhAFe@\\iDv@eIRiDXuD|@eFdBuGp@sBv@aH~@n@jKlHx@@zCc@jBA~BlAnGnEVA`GyPhGsL|BiDbCcFtFkOvF_R`EaOdAyERc@pByDjAcCVoAzA_JnBsPN}Aj@QEc@Ei@|A{QBaAHk@Ik@KkCSuHk@qCD_CPyD?oH`@}GRgFCuDPaIv@qDRmBZyM@sD_@gCcBiGU_Ce@wBoC}FsCqCkBo@uBw@q@wAsBsD[cBHwBc@mFAaCr@aHL{BMu@iCkRo@gCQeBgAsDiDqOe@gMFsCHaDQWeAsAi@i@sAcAwBqBkDwEeAaA}AcAmDuFqA}@qFm@iKeFiEyAuCuBeFeEcA}@U_@g@n@Ka@s@kB}@uBu@wCYiDJyDM_CuDaXa@_Aw@i@gB?qHhAZ[lBqJx@oDNs@Or@y@nDUlAqApGGREDeE~@aDVeB_AgBUwKUaCfBqJrDgEd@eJ{AcAe@uBuCyDsCyAm@aA_@s@@iCx@e@Ce@[wFkFaDmAoSqDaIk@mIu@gJ_B}BKwIEcAMaQ{C{Ae@}IsAcB{@aDkBiBs@iAaA_AwAcAoBqAk@aLmB?L@LnAh@TTBh@U|BT}B@UM_@uAg@IYGOy@AaBxAoDbHm@z@iCfB_SbMkEvCeBfBc@^eDj@_G\\iF\\wDhEuDbFgApFwI|a@mApIYdEMhGm@vJu@dEuAdDuBrC}A\\wCNyClB_B~A}BzBq@AmEoBeMkHqE{@iCEeDlAkJzGoB|DuClJu@vFD~Al@jDMrFY~GRpD|@hBhIrC~AlArB~B|DtDtCnCfEvBjEfAfBRlB~@tBdARZNp@GlBsB`HaAHm@AeAVkH|PuBxF_CbHi@xCmAvEw@dBuDjEwAnCyA`C_A|@u@vA}@fGG`BkArDYvDDbFQvCyAvMIvGa@bJUzDLfDjAjRf@xBPv@m@f@n@YDR\\`EvDhe@`@`AvRnOdAJx@d@t@`HRbAhCpEvBfItA|@lGbC`DZ~AxAlJpSbL`[bEtIdA~@hBl@vF~CnKzCrGbIlEtBvClCzBxAhAVpBDt@Ej@[vAcCd@E~@fArB~K`@|GTjCjIlMnApBpGnNp@|Ao@`AQNg@Ga@HiDhChDiCNIf@Fb@On@aAdJjSdF~KfAn@`If@zFNxFUvBWjc@iPd@M|ACb@MlCDxSl@zCH`CYvCkAdHqGdBeChd@o}@jBaDbAk@~FsBt@}@jIkPxJqMOfGm@pDBlEnAvB\\|@RxBRz@bB~BdBfClEfE",
  bounds: "{\"south\":42.067718108927046,\"west\":12.155146470336945,\"north\":42.169582974083674,\"east\":12.304663529663117}",
  name: "Lago di Bracciano Scenic Trot",
  distance: 0.26,
  origin: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
  destination: "Traversa Quarto del Lago, 00062 Bracciano RM, Ital...",
)

Activity.create!(
  user_id: eva.id,
  activatable_id: lago_di_bracciano.id,
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

10.times do |i|
  user1 = User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: Faker::Internet.email,
  password: "password",
  )
end
