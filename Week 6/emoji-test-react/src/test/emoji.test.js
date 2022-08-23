import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "../Header";
import App from "../App";


//her biri çalışmadan önce şunları yap
describe("testing emoji search", () => {
  test("Header companentinin başarılı render edilmesi ", () => {
    //header render
    render(<Header />);

    //headerda bulunan emoji search kelimelerini getbytext ile tut
    //componentlere erişim
    const head = screen.getByText("Emoji Search");
    //dokumanda olmalı
    expect(head).toBeInTheDocument();
  });

  //render
  test("Proje ilk acildiginde emoji listesinin basarili bir sekilde render'i ", () => {
    //app companenti render i
    render(<App />);
    //Click to copy emoji text bul
    const items = screen.getAllByText(/Click to copy emoji/i);
    //Relaxed text buş
    const item = screen.getByText("Relaxed");

    //item dokumanda olmalı
    expect(item).toBeInTheDocument();

    //items uzunluğu 20 ye eşit olmalı
    expect(items.length).toEqual(20);
  });



  //filtreleme
  test("filtre ile, uygun filtrelemenin render edilmesi ", () => {
    //render
    render(<App />);
    //placeholder ına göre tut
    let input = screen.getByPlaceholderText("Search for emoji");
     //type--(hangi inputtan alacaksın,ne alacaksın)
    userEvent.type(input, "yu");
    //yum tut
    let item = screen.getByText("Yum");
    //item dokumanda olmalı
    expect(item).toBeInTheDocument();
  });
  //
  test("emojiye tiklandiginda kopyalama ", () => {
    //render
    render(<App />);
    //id row olanı tut
    const clicks = screen.getAllByTestId("row");
//data-clipboard-text niteliğine sahip olmalı
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});