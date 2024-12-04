import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSortComponent } from './user-sort.component';

describe('UserSortComponent', () => {
  let component: UserSortComponent;
  let fixture: ComponentFixture<UserSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSortComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('first name sort should change the value of sortType to 2', () => {
  //clieck button
    const button: HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by First name").nativeElement;
    button.click();
    //wait
    fixture.detectChanges();
    //expect sortType = 2
    expect(component.sortType).toEqual(2);


  });

  it('Test handleClick is called', () => {
    spyOn(component, 'handleClick').and.callThrough();

    const button: HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by First name").nativeElement;
    button.click();

    expect(component.handleClick).toHaveBeenCalled();
  });

  it('Test call demoFunction', () => {
    spyOn(component, 'demoFunction').and.callThrough();

    const button: HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by First name").nativeElement;
    button.click();

    expect(component.demoFunction).toHaveBeenCalledWith(2);
  })

  it('Test call demoFunction and return string', () => {
    const spy = spyOn(component, 'demoFunction').and.callThrough();

    const button: HTMLElement = fixture.debugElement.query(x => x.nativeElement.textContent === "Sort by First name").nativeElement;
    button.click();

    const returnValue : string = spy.calls.mostRecent().returnValue;
    expect("Sort by 2").toEqual(returnValue);
  })
});
