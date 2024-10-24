// 'use client';

/*type SettingsType = {
  // children: ReactNode;
}*/

export default function SettingsIcon(/*{  }: SettingsType*/) {
  return (
    <div className={`transition-all duration-200 hover:scale-150 cursor-pointer`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M13.5314 9.51471C12.4151 9.51471 11.3446 9.95814 10.5553 10.7475C9.76594 11.5368 9.32251 12.6073 9.32251 13.7236C9.32251 14.8399 9.76594 15.9104 10.5553 16.6997C11.3446 17.489 12.4151 17.9325 13.5314 17.9325C14.6477 17.9325 15.7182 17.489 16.5075 16.6997C17.2968 15.9104 17.7403 14.8399 17.7403 13.7236C17.7403 12.6073 17.2968 11.5368 16.5075 10.7475C15.7182 9.95814 14.6477 9.51471 13.5314 9.51471ZM11.0061 13.7236C11.0061 13.0538 11.2721 12.4115 11.7457 11.9379C12.2193 11.4643 12.8616 11.1983 13.5314 11.1983C14.2011 11.1983 14.8435 11.4643 15.3171 11.9379C15.7907 12.4115 16.0567 13.0538 16.0567 13.7236C16.0567 14.3933 15.7907 15.0357 15.3171 15.5093C14.8435 15.9829 14.2011 16.2489 13.5314 16.2489C12.8616 16.2489 12.2193 15.9829 11.7457 15.5093C11.2721 15.0357 11.0061 14.3933 11.0061 13.7236Z"
              fill="url(#paint0_linear_355_9289)" />
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M13.5034 1.65881C13.0039 1.65881 12.5875 1.65881 12.2463 1.68126C11.8976 1.69578 11.5536 1.76784 11.2283 1.89451C10.8537 2.0495 10.5134 2.27676 10.2266 2.56332C9.93985 2.84987 9.71236 3.19011 9.55712 3.56459C9.39438 3.95742 9.35061 4.3727 9.33265 4.82389C9.33085 4.9889 9.28717 5.15075 9.2057 5.29426C9.12423 5.43777 9.00764 5.55823 8.86687 5.64434C8.72195 5.72347 8.5593 5.76447 8.39419 5.76349C8.22908 5.76251 8.06692 5.71958 7.92296 5.63873C7.52339 5.42773 7.14179 5.25825 6.71978 5.20213C6.31791 5.14927 5.90956 5.17608 5.51805 5.28104C5.12655 5.38599 4.75954 5.56703 4.438 5.81382C4.16614 6.03255 3.93217 6.29458 3.7455 6.58938C3.5547 6.87446 3.34594 7.23474 3.09677 7.66685L3.06871 7.71623C2.81843 8.14835 2.61079 8.50863 2.46039 8.81615C2.30326 9.13715 2.1798 9.45366 2.1349 9.80384C2.02783 10.6153 2.24745 11.4361 2.74547 12.0856C3.00474 12.4234 3.34257 12.6692 3.72418 12.9094C3.86645 12.9935 3.98498 13.1125 4.06863 13.255C4.15227 13.3976 4.19827 13.559 4.20231 13.7243C4.19827 13.8895 4.15227 14.051 4.06863 14.1935C3.98498 14.3361 3.86645 14.455 3.72418 14.5391C3.34257 14.7793 3.00586 15.0251 2.74547 15.3629C2.49868 15.6845 2.31764 16.0515 2.21269 16.443C2.10773 16.8345 2.08092 17.2428 2.13378 17.6447C2.1798 17.9949 2.30214 18.3114 2.45927 18.6324C2.61079 18.9399 2.81843 19.3002 3.06871 19.7323L3.09677 19.7817C3.34594 20.2138 3.5547 20.5741 3.7455 20.8592C3.94416 21.1543 4.15741 21.4203 4.438 21.6336C4.75946 21.8806 5.12642 22.0618 5.51793 22.167C5.90944 22.2721 6.31783 22.2991 6.71978 22.2464C7.14179 22.1903 7.52339 22.0219 7.92296 21.8098C8.06675 21.7291 8.22871 21.6862 8.39363 21.6852C8.55854 21.6842 8.721 21.7252 8.86575 21.8042C9.0073 21.8896 9.12462 22.0099 9.20655 22.1535C9.28847 22.2971 9.33227 22.4593 9.33377 22.6246C9.35061 23.0758 9.39438 23.4911 9.55825 23.8839C9.71323 24.2585 9.9405 24.5989 10.2271 24.8857C10.5136 25.1724 10.8538 25.3999 11.2283 25.5552C11.5538 25.6898 11.8905 25.7426 12.2463 25.7662C12.5875 25.7897 13.0039 25.7897 13.5034 25.7897H13.5595C14.0589 25.7897 14.4753 25.7897 14.8165 25.7673C15.1735 25.7426 15.509 25.6898 15.8345 25.554C16.2091 25.399 16.5495 25.1718 16.8363 24.8852C17.123 24.5987 17.3505 24.2584 17.5057 23.8839C17.6685 23.4911 17.7123 23.0758 17.7302 22.6246C17.7318 22.4594 17.7754 22.2974 17.8569 22.1536C17.9384 22.0099 18.0551 21.8893 18.196 21.8031C18.341 21.7241 18.5037 21.6833 18.6688 21.6845C18.8339 21.6857 18.996 21.7288 19.1399 21.8098C19.5395 22.0208 19.9211 22.1903 20.3431 22.2453C21.1545 22.3524 21.9753 22.1327 22.6249 21.6347C22.9054 21.4192 23.1187 21.1543 23.3174 20.8592C23.5082 20.5741 23.7169 20.2138 23.9661 19.7817L23.9941 19.7323C24.2444 19.3002 24.4521 18.9399 24.6025 18.6324C24.7596 18.3114 24.8831 17.9938 24.928 17.6447C25.035 16.8332 24.8154 16.0125 24.3174 15.3629C24.0581 15.0251 23.7203 14.7793 23.3387 14.5391C23.1964 14.455 23.0779 14.3361 22.9942 14.1935C22.9106 14.051 22.8646 13.8895 22.8606 13.7243C22.8606 13.4123 23.0312 13.1025 23.3387 12.9094C23.7203 12.6692 24.057 12.4234 24.3174 12.0856C24.5642 11.7641 24.7452 11.3971 24.8502 11.0056C24.9551 10.6141 24.9819 10.2057 24.9291 9.80384C24.8757 9.45895 24.7657 9.12523 24.6036 8.81615C24.412 8.44324 24.2087 8.07643 23.9941 7.71623L23.9661 7.66685C23.7611 7.30106 23.5447 6.94173 23.3174 6.58938C23.1307 6.29489 22.8967 6.03323 22.6249 5.81494C22.3034 5.56796 21.9364 5.38671 21.5449 5.28157C21.1534 5.17642 20.745 5.14943 20.3431 5.20213C19.9211 5.25825 19.5395 5.4266 19.1399 5.63873C18.9961 5.71938 18.8341 5.7622 18.6692 5.76318C18.5043 5.76416 18.3419 5.72327 18.1971 5.64434C18.0559 5.5585 17.9389 5.43816 17.857 5.29463C17.7751 5.15111 17.7311 4.98912 17.7291 4.82389C17.7123 4.3727 17.6685 3.95742 17.5046 3.56459C17.3496 3.19 17.1224 2.84961 16.8358 2.56287C16.5493 2.27612 16.209 2.04863 15.8345 1.89339C15.509 1.7587 15.1723 1.70595 14.8165 1.68238C14.4753 1.65881 14.0589 1.65881 13.5595 1.65881H13.5034ZM11.8726 3.44899C11.959 3.41307 12.0903 3.38053 12.3608 3.36145C12.638 3.34237 12.9972 3.34237 13.5314 3.34237C14.0657 3.34237 14.4248 3.34237 14.7021 3.36145C14.9726 3.38053 15.1039 3.41307 15.1903 3.44899C15.5349 3.59153 15.8076 3.86427 15.9501 4.20883C15.995 4.31658 16.0321 4.48606 16.0467 4.88674C16.0803 5.77566 16.5394 6.63203 17.3542 7.1023C18.1691 7.57369 19.1399 7.54227 19.9267 7.12699C20.2814 6.93956 20.4463 6.8868 20.5631 6.87221C20.9318 6.82348 21.3049 6.9232 21.6001 7.14944C21.6742 7.20668 21.7685 7.30433 21.92 7.5288C22.076 7.76001 22.2556 8.0709 22.5227 8.53332C22.7898 8.99573 22.9683 9.30775 23.0906 9.55692C23.2107 9.80047 23.2478 9.93067 23.259 10.0238C23.3077 10.3926 23.208 10.7656 22.9818 11.0609C22.9099 11.154 22.782 11.2708 22.443 11.484C21.6888 11.9577 21.177 12.7837 21.177 13.7243C21.177 14.6648 21.6888 15.4909 22.443 15.9645C22.782 16.1778 22.9099 16.2945 22.9818 16.3877C23.2085 16.6828 23.3073 17.0555 23.259 17.4247C23.2478 17.5179 23.2096 17.6492 23.0906 17.8916C22.9683 18.1419 22.7898 18.4528 22.5227 18.9152C22.2556 19.3776 22.0749 19.6885 21.92 19.9197C21.7685 20.1442 21.6742 20.2419 21.6001 20.2991C21.3049 20.5253 20.9318 20.6251 20.5631 20.5763C20.4463 20.5617 20.2825 20.509 19.9267 20.3216C19.141 19.9063 18.1691 19.8748 17.3542 20.3451C16.5394 20.8165 16.0803 21.6729 16.0467 22.5618C16.0321 22.9625 15.995 23.132 15.9501 23.2397C15.8796 23.4101 15.7762 23.5649 15.6458 23.6953C15.5155 23.8256 15.3607 23.929 15.1903 23.9996C15.1039 24.0355 14.9726 24.068 14.7021 24.0871C14.4248 24.1062 14.0657 24.1062 13.5314 24.1062C12.9972 24.1062 12.638 24.1062 12.3608 24.0871C12.0903 24.068 11.959 24.0355 11.8726 23.9996C11.7022 23.929 11.5474 23.8256 11.417 23.6953C11.2866 23.5649 11.1832 23.4101 11.1127 23.2397C11.0678 23.132 11.0308 22.9625 11.0162 22.5618C10.9825 21.6729 10.5235 20.8165 9.70864 20.3462C8.8938 19.8748 7.92296 19.9063 7.13618 20.3216C6.78151 20.509 6.61652 20.5617 6.49979 20.5763C6.13102 20.6251 5.75799 20.5253 5.46273 20.2991C5.38865 20.2419 5.29437 20.1442 5.14285 19.9197C4.93175 19.5911 4.73075 19.2561 4.54014 18.9152C4.27302 18.4528 4.09456 18.1408 3.97222 17.8916C3.85213 17.6481 3.81509 17.5179 3.80387 17.4247C3.75514 17.0559 3.85485 16.6829 4.08109 16.3877C4.15292 16.2945 4.28087 16.1778 4.61983 15.9645C5.37406 15.4909 5.88586 14.6648 5.88586 13.7243C5.88586 12.7837 5.37406 11.9577 4.61983 11.484C4.28087 11.2708 4.15292 11.154 4.08109 11.0609C3.85485 10.7656 3.75514 10.3926 3.80387 10.0238C3.81509 9.93067 3.85325 9.79935 3.97222 9.55692C4.09456 9.30663 4.27302 8.99573 4.54014 8.53332C4.80726 8.0709 4.98796 7.76001 5.14285 7.5288C5.29437 7.30433 5.38865 7.20668 5.46273 7.14944C5.75799 6.9232 6.13102 6.82348 6.49979 6.87221C6.61652 6.8868 6.78039 6.93956 7.13618 7.12699C7.92183 7.54227 8.8938 7.57369 9.70864 7.1023C10.5235 6.63203 10.9825 5.77566 11.0162 4.88674C11.0308 4.48606 11.0678 4.31658 11.1127 4.20883C11.2553 3.86427 11.528 3.59153 11.8726 3.44899Z"
              fill="url(#paint1_linear_355_9289)" />
        <defs>
          <linearGradient id="paint0_linear_355_9289" x1="9.32251" y1="13.7236" x2="17.7403" y2="13.7236"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#FB3838" />
            <stop offset="1" stop-color="#F27155" />
          </linearGradient>
          <linearGradient id="paint1_linear_355_9289" x1="2.10742" y1="13.7243" x2="24.9554" y2="13.7243"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#FB3838" />
            <stop offset="1" stop-color="#F27155" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
