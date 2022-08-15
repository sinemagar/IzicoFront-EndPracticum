import axios from "axios";

//asyn func olarak tanımlanan getData export edilmesi
export default async function getData(user_id){
    
    try {
        //data verisini users olarak tanımlayıp axios metodu ile api den girilen id ye ait veriyi çekme
        const {data: users}=(await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`))
        console.log(`user ${user_id} : `,users);

        const {data: usersPost} = (await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`))
        console.log(`post id ${user_id}: `,usersPost);
        
    } catch (error) {///eğer hata varsa catch edüşüp hatayı basacak
        console.log("hata: ",e);
        
    }

}