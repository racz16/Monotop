import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ListBoxComponent } from 'src/app/shared/components/list-box/list-box.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivitiesPageComponent } from './activities-page.component';

describe('ActivitiesPageComponent', () => {
    let component: ActivitiesPageComponent;
    let fixture: ComponentFixture<ActivitiesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ActivitiesPageComponent],
            imports: [SharedModule],
        });
        fixture = TestBed.createComponent(ActivitiesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the header', () => {
        const h1: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
        expect(h1).toBeTruthy();
        expect(h1.textContent).toBe('Tevékenységeink');
    });

    it('should display the 1st list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(1)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[0];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Nagytáblás ipari padló');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/nagytablas.jpg');
        expect(listItems.length).toBe(11);
        expect(listItems[0]?.textContent).toContain('kopásálló, könnyen takarítható, sima, pormentes felület');
        expect(listItems[1]?.textContent).toContain(
            'nagy teherbírású, szálerősített betonpadló acélszál vagy műanyag szál adagolással'
        );
        expect(listItems[2]?.textContent).toContain('szükség esetén hálós vasalással');
        expect(listItems[3]?.textContent).toContain('táblák mérete legfeljebb 30x30 m');
        expect(listItems[4]?.textContent).toContain('min. 18 cm-es vastagság');
        expect(listItems[5]?.textContent).toContain('munkahézagok kialakítása speciális profilokkal');
        expect(listItems[6]?.textContent).toContain('csomópontokban, kapukban kiegészítő vasalással');
        expect(listItems[7]?.textContent).toContain(
            'nincs vágott fuga, ezért a fugák élletörései, kagylós kitörések, függőleges mozgások, táblabillegések nem tudnak kialakulni'
        );
        expect(listItems[8]?.textContent).toContain(
            'tartósabb szerkezet a vágott fugás padlónál, hosszabb élettartam, alacsonyabb karbantartási költségek'
        );
        expect(listItems[9]?.textContent).toContain('gazdaságos műszaki megoldás');
        expect(listItems[10]?.textContent).toContain(
            'elsősorban ipari, kereskedelmi épületek (raktárak, üzemek, műhelyek, áruházak, parkolóházak, mezőgazdasági és állattartó épületek)'
        );
    });

    it('should display the 2nd list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(2)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[1];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Vágott fugás ipari padló');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/vagott.jpg');
        expect(listItems.length).toBe(7);
        expect(listItems[0]?.textContent).toContain('kopásálló, könnyen takarítható, sima, pormentes felület');
        expect(listItems[1]?.textContent).toContain(
            'nagy teherbírású, szálerősített betonpadló acélszál, műanyag szál vagy üvegszál adagolással, szükség esetén hálós vasalással'
        );
        expect(listItems[2]?.textContent).toContain('csomópontokban, kapukban kiegészítő vasalással');
        expect(listItems[3]?.textContent).toContain('vágott fugák távolsága legfeljebb 6,0 m');
        expect(listItems[4]?.textContent).toContain(
            'munkahézagok kialakítása speciális profilokkal, bennmaradó vagy bontható zsaluval'
        );
        expect(listItems[5]?.textContent).toContain('gazdaságos műszaki megoldás');
        expect(listItems[6]?.textContent).toContain(
            'elsősorban ipari, kereskedelmi épületek (raktárak, üzemek, műhelyek, áruházak, parkolóházak, mezőgazdasági és állattartó épületek, sportlétesítmények)'
        );
    });

    it('should display the 3rd list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(3)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[2];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Térbetonok, beton útburkolatok');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/terbeton.jpg');
        expect(listItems.length).toBe(7);
        expect(listItems[0]?.textContent).toContain('közlekedési utak, rakodóudvarok, benzinkutak létesítéséhez');
        expect(listItems[1]?.textContent).toContain('nagy teherbírású');
        expect(listItems[2]?.textContent).toContain('bazalt vagy andezit adalékos betonból, légpórusképzővel');
        expect(listItems[3]?.textContent).toContain('szükség esetén üvegszál erősítéssel');
        expect(listItems[4]?.textContent).toContain('csúszásmentes, seprűzött vagy enyhén simított felülettel');
        expect(listItems[5]?.textContent).toContain('fagyálló, nagy kopásállóságú, tartós');
        expect(listItems[6]?.textContent).toContain(
            'alkalmazásával elkerülhető az aszfalt- vagy térkőburkolatoknál előforduló gyűrődések, süllyedések'
        );
    });

    it('should display the 4th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(4)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[3];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Alaplemezek');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/alaplemez.jpg');
        expect(listItems.length).toBe(6);
        expect(listItems[0]?.textContent).toContain('épületek vasalt lemezalapjai kopóréteggel vagy burkolat alá');
        expect(listItems[1]?.textContent).toContain('25-30 cm vastagságtól, 80 cm vastagságig');
        expect(listItems[2]?.textContent).toContain('egyéb alapozások helyett');
        expect(listItems[3]?.textContent).toContain('vágott fuga nélkül');
        expect(listItems[4]?.textContent).toContain('vasalt kialakítással');
        expect(listItems[5]?.textContent).toContain('vízzáró szerkezet');
    });

    it('should display the 5th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(5)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[4];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Felbetonok');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/felbeton.jpg');
        expect(listItems.length).toBe(2);
        expect(listItems[0]?.textContent).toContain('előregyártott födémelemekkel együttdolgozó vasalt betonszerkezet');
        expect(listItems[1]?.textContent).toContain('kopóréteggel vagy burkolat alá');
    });

    it('should display the 6th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(6)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[5];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Aljzatbetonok, szerelőbetonok');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/aljzatbeton.jpg');
        expect(listItems.length).toBe(3);
        expect(listItems[0]?.textContent).toContain('vasalt vagy vasalás nélküli aljzatbetonok burkolatok alá');
        expect(listItems[1]?.textContent).toContain('vágott fugás kivitelben');
        expect(listItems[2]?.textContent).toContain('szerelőbetonok készítése vasbeton lemezek fogadórétegeként');
    });

    it('should display the 7th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(7)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[6];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Felújítás, állagmegóvás');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/felujitas.jpg');
        expect(listItems.length).toBe(6);
        expect(listItems[0]?.textContent).toContain(
            'fugasérülések, betontáblák élletöréseinek, kagylós kitörések javítása'
        );
        expect(listItems[1]?.textContent).toContain('fugaanyag pótlása, újrafugázás');
        expect(listItems[2]?.textContent).toContain('ipari padlók felületi sérüléseinek javítása');
        expect(listItems[3]?.textContent).toContain('táblasüllyedések, táblabillegések megszűntetése injektálással');
        expect(listItems[4]?.textContent).toContain('felületi csiszolások');
        expect(listItems[5]?.textContent).toContain('felületi kopások kezelése vízüveggel');
    });

    it('should display work together', () => {
        const workTogether = fixture.debugElement.queryAll(By.css('app-work-together'));
        expect(workTogether).toBeTruthy();
    });
});
