import java.util.Scanner;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		WebDriver driver = new ChromeDriver();
		
		boolean is_On = true;
		
		while(is_On) {
			System.out.println();
			System.out.print("기준 날짜 (20220101 형식으로 입력해주세요) : ");
			String keyword = sc.next();
			
			System.out.println();
			System.out.println(keyword.substring(0, 4) + "년 " + keyword.substring(4, 6) + "월 " + keyword.substring(6) + "일 기준" );
			System.out.println();
			
			System.out.println("조회순은 1, 평점순은 2, 종료는 3을 입력해주세요.");
			int choice = sc.nextInt();
			
			if(choice == 1) {
				
				System.out.println("장르를 선택하세요.");
				System.out.println("0) 전체\n1) 드라마\n2) 판타지\n3) 공포\n4) 멜로/애정/로맨스\n5) 모험\n6) 스릴러\n7) 느와르\n8) 다큐멘터리\n9) 코미디\n10) 가족\n11) 미스터리\n12) 전쟁\n13) 애니메이션\n14) 범죄\n15) 뮤지컬\n16) SF\n17) 액션");

				int genre = sc.nextInt();
				
				if(genre >= 3) {
					genre += 1;
				}					
				if(genre >= 10) {
					genre += 1;
				}
				
				driver.get("https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=cnt&date=20220714" + keyword + "&tg=" + genre);
 								
				try {
					for(int i=0; i<10; i++) {
						WebElement movieName = driver.findElement(By.cssSelector("#old_content > table > tbody > tr:nth-child(" + (i+2) + ") > td.title > div > a"));
						System.out.println((i+1) + "위  : " + movieName.getText());
						}
				}
				catch(Exception e) {}				
					
			}
			
			else if(choice == 2) {			
				
				driver.get("https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=cur&date=" + keyword);

				for(int i=0; i<10; i++) {
					WebElement movieName = driver.findElement(By.xpath("//*[@id=\"old_content\"]/table/tbody/tr[" + (i+2) + "]/td[2]/div/a"));
					System.out.println((i+1) + "위  : " + movieName.getText());	}	
			}
			
			else if(choice == 3) {
				break;
			}
			
			else {
				System.out.println("잘못 입력하셨습니다.");				
			}			
			
		}
		sc.close();
		
	}

}
