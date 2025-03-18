import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ListBoxComponent } from 'src/app/shared/components/list-box/list-box.component';
import { WorkTogetherComponent } from 'src/app/shared/components/work-together/work-together.component';
import { ActivitiesPageComponent } from './activities-page.component';

describe('ActivitiesPageComponent', () => {
    let component: ActivitiesPageComponent;
    let fixture: ComponentFixture<ActivitiesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ListBoxComponent, WorkTogetherComponent, ActivitiesPageComponent],
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
        expect(listBoxComponent.headerTitle).toBe('Ipari padlók készítése');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/ipari-padlo.webp');
        expect(listItems.length).toBe(7);
        expect(listItems[0]?.textContent).toContain('nagy teherbírású, szálerősített betonpadló');
        expect(listItems[1]?.textContent).toContain(
            'acélszál, műanyagszál vagy üvegszál adagolással, és/vagy vasalással'
        );
        expect(listItems[2]?.textContent).toContain('nagytáblás vagy vágott fugás kivitelben');
        expect(listItems[3]?.textContent).toContain('kopásálló, könnyen takarítható, sima, pormentes felület');
        expect(listItems[4]?.textContent).toContain('munkahézagok kialakítása speciális profilokkal');
        expect(listItems[5]?.textContent).toContain('gazdaságos műszaki megoldás');
        expect(listItems[6]?.textContent).toContain(
            'elsősorban ipari, kereskedelmi épületek (raktárak, üzemek, műhelyek, áruházak, parkolóházak, mezőgazdasági és állattartó épületek)'
        );
    });

    it('should display the 2nd list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(2)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[1];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Rinol DRT technológia');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('');
        expect(listItems.length).toBe(8);
        expect(listItems[0]?.textContent).toContain('nedves csiszolási technológia beton padlófelülekre');
        expect(listItems[1]?.textContent).toContain('gyors, hatékony módszer, ami nem jár porképződéssel');
        expect(listItems[2]?.textContent).toContain('padlók felületeinek megerősítésére');
        expect(listItems[3]?.textContent).toContain('felületi kopások kezelése, megelőzése');
        expect(listItems[4]?.textContent).toContain('használatból eredő felületi porképződés minimálisra csökkentése');
        expect(listItems[5]?.textContent).toContain('könnyebb tisztíthatóság, karbantartás');
        expect(listItems[6]?.textContent).toContain('fokozottabb ellenállás a karcolásokkal ütésekkel szemben');
        expect(listItems[7]?.textContent).toContain('energiamegtakarítás');
    });

    it('should display the 3rd list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(3)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[2];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Térbetonok, beton útburkolatok');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/terbeton.webp');
        expect(listItems.length).toBe(5);
        expect(listItems[0]?.textContent).toContain('közlekedési utak, rakodóudvarok, benzinkutak létesítéséhez');
        expect(listItems[1]?.textContent).toContain('nagy teherbírású');
        expect(listItems[2]?.textContent).toContain('bazalt vagy andezit adalékos betonból, légpórusképzővel');
        expect(listItems[3]?.textContent).toContain('csúszásmentes, seprűzött vagy enyhén simított felülettel');
        expect(listItems[4]?.textContent).toContain(
            'alkalmazásával elkerülhető az aszfalt- vagy térkőburkolatoknál előforduló gyűrődések, süllyedések'
        );
    });

    it('should display the 4th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(4)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[3];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Padlójavítások, felújítás, állagmegóvás');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/felujitas.webp');
        expect(listItems.length).toBe(5);
        expect(listItems[0]?.textContent).toContain(
            'fugasérülések, betontáblák élletöréseinek, kagylós kitörések javítása'
        );
        expect(listItems[1]?.textContent).toContain('fugaanyag pótlása, újrafugázás');
        expect(listItems[2]?.textContent).toContain('ipari padlók felületi sérüléseinek javítása');
        expect(listItems[3]?.textContent).toContain('táblasüllyedések, táblabillegések megszűntetése injektálással');
        expect(listItems[4]?.textContent).toContain('felületi javítások');
    });

    it('should display the 5th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(5)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[4];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Alaplemezek');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/alaplemez.webp');
        expect(listItems.length).toBe(3);
        expect(listItems[0]?.textContent).toContain('épületek vasalt lemezalapjai kopóréteggel vagy burkolat alá');
        expect(listItems[1]?.textContent).toContain('nagy, akár 80-100 cm-es vastagságban');
        expect(listItems[2]?.textContent).toContain('egyéb alapozások helyett');
    });

    it('should display the 6th list box', () => {
        const listBox = fixture.debugElement.query(By.css('app-list-box:nth-of-type(6)'));
        const listBoxComponent: ListBoxComponent = listBox.componentInstance;
        const ul: HTMLElement = fixture.nativeElement.querySelectorAll('ul')[5];
        const listItems: NodeListOf<HTMLLIElement> = ul.querySelectorAll('li');
        expect(listBox).toBeTruthy();
        expect(listBoxComponent.headerTitle).toBe('Felbetonok, aljzatbetonok, szerelőbetonok');
        expect(listBoxComponent.headerBackgroundImagePath).toBe('activities-page/felbeton.webp');
        expect(listItems.length).toBe(3);
        expect(listItems[0]?.textContent).toContain(
            'födémmel együttdolgozó vasalt felbeton szerkezetek kopóréteggel, vagy burkolat alá'
        );
        expect(listItems[1]?.textContent).toContain('vasalt vagy vasalás nélküli aljzatbetonok burkolatok alá');
        expect(listItems[2]?.textContent).toContain('szerelőbetonok készítése vasbeton lemezek fogadórétegeként');
    });

    it('should display work together', () => {
        const workTogether = fixture.debugElement.queryAll(By.css('app-work-together'));
        expect(workTogether).toBeTruthy();
    });
});
