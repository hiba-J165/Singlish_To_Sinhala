const { test, expect } = require('@playwright/test');


const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};


const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_0001',
      name: 'Convert a simple sentence',
      input: 'mama aluth pothak ganna kadeta yanavaa.',
      expected: 'මම අලුත් පොතක් ගන්න කඩෙට යනවා.',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0002',
      name: 'Convert a compound sentence',
      input: 'api meka liyalaa ivara karamu iita passe kanna yamu.',
      expected: 'අපි මෙක ලියලා ඉවර කරමු ඊට පස්සෙ කන්න යමු.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0003',
      name: 'Convert a complex sentence',
      input: 'heta oyaa pansalata yanavanam maath enavaa.',
      expected: 'හෙට ඔයා පන්සලට යනවනම් මාත් එනවා.',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0004',
      name: 'Short mixed Singlish + English request',
      input: 'heta iskoleta edhdhi oyaage science  potha aragena enna puLuvandha?',
      expected: 'හෙට ඉස්කොලෙට එද්දි ඔයාගෙ science  පොත අරගෙන එන්න පුළුවන්ද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0005',
      name: 'Short Greeting',
      input: 'obata niroogii vasanaavantha subama suba  aluth avurudhdhak veevaa!',
      expected: 'ඔබට නිරෝගී වසනාවන්ත සුබම සුබ  අලුත් අවුරුද්දක් වේවා!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0006',
      name: 'Convert an imperative  sentence',
      input: 'meese uda thiyena vathura boothalaya aran enna.',
      expected: 'මේසෙ උඩ තියෙන වතුර බෝතලය අරන් එන්න.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0007',
      name: 'Convert negative sentence',
      input: 'iiye apita liyanna dhunna rachanaava mama liyalaa ivara karee naehae.',
      expected: 'ඊයෙ අපිට ලියන්න දුන්න රචනාව මම ලියලා ඉවර කරේ නැහැ.',
      category: 'Daily language usage.',
      grammar: 'Negation (Negative form)',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0008',
      name: 'Convert a short response',
      input: 'ov, oyaa kiyapu vaeda tika mama karalaa ivara karaa.',
      expected: 'ඔව්, ඔයා කියපු වැඩ ටික මම කරලා ඉවර කරා.',
      category: 'Greeting / request / response',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0009',
      name: 'Convert repeated word phrase',
      input: 'ov ov, heta udheeta api hemin hemin aevidhalaa yamu.',
      expected: 'ඔව් ඔව්, හෙට උදේට අපි හෙමින් හෙමින් ඇවිදලා යමු.',
      category: 'Word combination/ phrase pattern',
      grammar: 'Future tense',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0010',
      name: 'Convert mixed Singlish + English past tense',
      input: 'iiye api museum eka balanna giyaa.',
      expected: 'ඊයෙ අපි museum එක බලන්න ගියා.',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0011',
      name: 'Convert pronoun variation',
      input: 'api baeQQkuvata yamu.',
      expected: 'අපි බැංකුවට යමු.',
      category: 'Daily language usage.',
      grammar: 'Pronoun variation (I/you/we/they)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0012',
      name: 'Convert punctuations and numbers',
      input: 'Teacher kivvaa heta udheeta 10.00 am enne kiyalaa, edhdhi Rs.1000 aran ennath kivvaa.',
      expected: 'Teacher කිව්වා හෙට උදේට 10.00 am එන්නෙ කියලා, එද්දි Rs.1000 අරන් එන්නත් කිව්වා.',
      category: 'Punctuation / numbers',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_0013',
      name: 'Convert informal language',
      input: 'ehenam ithin oyaa ooni dheyak karaganna.',
      expected: 'එහෙනම් ඉතින් ඔයා ඕනි දෙයක් කරගන්න.',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0014',
      name: 'Convert Singlish + English conversation',
      input: 'Heta udheeta Zoom meeting ekak dhaalaa thamayi project eka gaena discuss karanavaa kivve. Oyaata thamayi link eka dhaanavaa kivve link eka dhaemmama matath share karanna puLuvandha? Apita ideas thiyenavaanam eevath podi note ekak dhalaa thiyaganna kivvaa. Meeting ekata velaavata join venna, ikmanata ivara karanavalu. Meeting eka ivara unaata passe oyaa campus enavaa nedha? Campus ekata edhdhi mama illapu notes tikath aran enna saha  PDF tikath mata evanna. Api notes tika complete karalaa lecture ekatath yamu.',
      expected: 'හෙට උදේට Zoom meeting එකක් දාලා තමයි project එක ගැන discuss කරනවා කිව්වෙ. ඔයාට තමයි link එක දානවා කිව්වෙ link එක දැම්මම මටත් share කරන්න පුළුවන්ද? අපිට ideas තියෙනවානම් ඒවත් පොඩි note එකක් දලා තියගන්න කිව්වා. Meeting එකට වෙලාවට join වෙන්න, ඉක්මනට ඉවර කරනවලු. Meeting එක ඉවර උනාට පස්සෙ ඔයා campus එනවා නේද? Campus එකට එද්දි මම ඉල්ලපු notes ටිකත් අරන් එන්න සහ  PDF ටිකත් මට එවන්න. අපි notes ටික complete කරලා lecture එකටත් යමු.',
      category: 'Mixed Singlish + English',
      grammar: 'Compound sentence',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_0015',
      name: 'Format checking',
      input: 'iiye         api         midhula        pirisidhu             karaa.',
      expected: 'ඊයෙ         අපි         මිදුල        පිරිසිදු             කරා.',
      category: 'Formatting (spaces /  line breaks / paragraphs)',
      grammar: 'Past tense',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0016',
      name: 'Convert English names',
      input: 'api dhaen Matara yamu.',
      expected: 'අපි දැන් Matara යමු.',
      category: 'Names/places/common English words',
      grammar: 'Present tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_0017',
      name: 'Convert plural request',
      input: 'karunaakara sathunta kaeema dhiimen vaLakinna.',
      expected: 'කරුනාකර සතුන්ට කෑම දීමෙන් වළකින්න.',
      category: 'Greeting / request / response',
      grammar: 'Plural form',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0018',
      name: 'Convert currency',
      input: 'Rs.1000 aran enna.',
      expected: 'Rs.1000 අරන් එන්න.',
      category: 'Punctuation / numbers',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_0019',
      name: 'Informal short phrase',
      input: 'anee mata oyaa  kiyapu potha aran enna baeri unaa.',
      expected: 'අනේ මට ඔයා  කියපු පොත අරන් එන්න බැරි උනා.',
      category: 'Slang / informal language',
      grammar: 'Past tense',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0020',
      name: 'Convert common English words',
      input: 'mama university ekata yanna kalin bank ekata yanna ooni.',
      expected: 'මම university එකට යන්න කලින් bank එකට යන්න ඕනි.',
      category: 'Names/places/common English words',
      grammar: 'Compound sentence',
      length: 'M'
    },

     {
      tcId: 'Pos_Fun_0021',
      name: 'Convert daily large conversations',
      input: 'aeyi adha oyaa school ekata aavee naeththee? apita okkoma subjects igaennuvaa saha homework godak dhunnaa. Science vala quiz ekakuth dhunnaa eka nam aththatama godak amaruyi, hamooma amaruyi kivvaa. Teacher kivvaa godak ayata marks aduyinam aayee next week spot test ekak dhenavaa kivvaa, ekata MCQ 10k saha short answer questions 5k thamyi dhenavaa kivvee. apita dhaen venakam uganvalaa thiyena okkoma balaagena enna kivvaa. heta school edhdhii apee last term exam papers aran enna kivvaa. ',
      expected: 'ඇයි අද ඔයා school එකට ආවේ නැත්තේ? අපිට ඔක්කොම subjects ඉගැන්නුවා සහ homework ගොඩක් දුන්නා. Science වල quiz එකකුත් දුන්නා එක නම් අත්තටම ගොඩක් අමරුයි, හමෝම අමරුයි කිව්වා. Teacher කිව්වා ගොඩක් අයට marks අඩුයිනම් ආයේ next week spot test එකක් දෙනවා කිව්වා, එකට MCQ 10ක් සහ short answer questions 5ක් තම්යි දෙනවා කිව්වේ. අපිට දැන් වෙනකම් උගන්වලා තියෙන ඔක්කොම බලාගෙන එන්න කිව්වා. හෙට school එද්දී අපේ last term exam papers අරන් එන්න කිව්වා. ',
      category: 'Mixed Singlish + English',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0022',
      name: 'Unit conversion check',
      input: 'gedhara edhdhi parippu 2Kg aran enna.',
      expected: 'ගෙදර එද්දි පරිප්පු 2Kg අරන් එන්න.',
      category: 'Punctuation / numbers',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_0023',
      name: 'Convert Singlish + English negative sentence',
      input: 'Class ekee dhunna homework mama ivara karee naehae.',
      expected: 'Class එකේ දුන්න homework මම ඉවර කරේ නැහැ.',
      category: 'Mixed Singlish + English',
      grammar: 'Negation (Negative form)',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_0024',
      name: 'Convert daily language usage',
      input: 'aachchi poLata yanna enna kivvaa.',
      expected: 'ආච්චි පොළට යන්න එන්න කිව්වා.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_0001',
      name: 'Convert sentence without proper spacing',
      input: 'mama kaviyakliyanavaa.',
      expected: 'මම කවියක් ලියනවා.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0002',
      name: 'Convert a simple conversation',
      input: 'me potha eyata dhenna.',
      expected: 'මේ පොත එයාට දෙන්න.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_0003',
      name: 'Convert daily conversation',
      input: 'oyaa adha aluth adhumak ganna yanavadha?',
      expected: 'ඔයා අද අලුත් අඳුමක් ගන්න යනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0004',
      name: 'English word confusions',
      input: 'Seeya mallith ekka heta game yanavaa kivvaa.',
      expected: 'සීයා මල්ලිත් එක්ක හෙට ගමේ යනවා කිව්වා.',
      category: 'Typographical error handling',
      grammar: 'Complex sentence',
      length: 'L'
    },
    {
      tcId: 'Neg_Fun_0005',
      name: 'Convert improper capitalization',
      input: 'oyaa edhdhi aluthin aapu cartoon cd eka aran enna puLuvandha?',
      expected: 'ඔයා එද්දි අලුතින් ආපු cartoon cd එක අරන් එන්න පුළුවන්ද?',
      category: 'Mixed Singlish + English',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0006',
      name: 'Multi line checking',
      input: 'api dhaen koovilata yanavaa. \n oyath enavadha?',
      expected: 'අපි දැන් කෝවිලට යනවා.           ඔයත් එනවද?',
      category: 'Formatting (spaces /  line breaks / paragraphs)',
      grammar: 'Interrogative (question)',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0007',
      name: 'Fault in names of Common places',
      input: 'apee ratee aganuvara Sri Jayawardenepura Kotte yi.',
      expected: 'අපේ රටේ අගනුවර Sri Jayawardenepura Kotte යි.',
      category: 'Names/places/common English words',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0008',
      name: 'Convert reading issue',
      input: 'api project management tools vidhihata Trello saha  Jira paavichchi karaa. ',
      expected: 'අපි project management tools විදිහට Trello සහ Jira පාවිච්චි කරා.',
      category: 'Names/places/common English words',
      grammar: 'Past tense',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0009',
      name: 'Convert improper spacing',
      input: 'naQQgii kivvaa adha school ekee exam thibbaa  kiyalaa.',
      expected: 'නංගී කිව්වා අද school එකේ exam තිබ්බා  කියලා.',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Neg_Fun_0010',
      name: 'Informal language translation',
      input: 'api okkoma ekathuvelaa podi chat ekak dhaagena hitapu nisaa thamayi enna parakku unee.',
      expected: 'අපි ඔක්කොම එකතුවෙලා පොඩි chat එකක් දාගෙන හිටපු නිසා තමයි එන්න පරක්කු උනේ.',
      category: 'Mixed Singlish + English',
      grammar: 'Compound sentence',
      length: 'M'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_0001',
    name: 'Checking UI output',
    input: 'adha bus ekee yamu dha?',
    partialInput: 'adha bus',
    expectedFull: 'අද bus එකේ යමු ද?',
    category: 'Mixed Singlish + English',
    grammar: 'Interrogative (question)',
    length: 'S'
  }
};


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}


test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      
      await page.waitForTimeout(1500);
      
      
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      
      await translator.waitForOutput();
      
      
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
