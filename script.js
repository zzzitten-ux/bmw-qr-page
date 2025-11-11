// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Modal content data
const modalContent = {
    'registration-deadline': {
        title: '등록 기한 안내',
        content: `
            <h3><b>차량 등록일 기준 1년 이내 등록 필수</b></h3>
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW 전기차 충전 프로모션 혜택을 받기 위해서는<br>차량 등록일 기준 1년 이내에 BMW Charging App을 통해 회원가입 및 차량 등록을 완료해야 합니다.</p>
            
            <div class="warning-box">
                <strong>⚠️ 중요 :</strong> 등록 기한 내 미가입 시, 모든 서비스 혜택 제공이 불가합니다.
            </div>
            
            <h3>🔹 등록 기한 확인 방법</h3>
            <ol>
                <li>차량 등록일은 <b>차량등록증</b>에서 확인할 수 있습니다.</li>
                <li><b>BMW 딜러</b>를 통해 정확한 등록일을 문의하실 수도 있습니다.</li>
            </ol>
            
            <div class="highlight">
                <strong>💡 안내:</strong><br>
                차량 구매 후 가능한 한 빨리 BMW Charging App을 설치하고 회원가입 및 차량 등록을 완료하시길 권장드립니다.
            </div>
        `
    },
    'new-car-benefits': {
        title: '신차구매혜택 상세 안내',
        content: `
            <h3><b>차량정보 확인 후 크레딧 지급</b></h3>
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW 전기차 충전 프로모션 혜택은 <b>차량정보 확인 후 자동으로 지급됩니다.</b><br>차량정보 인증이 완료되면 해당 차종에 맞는 크레딧이 자동으로 적립됩니다.</p>
            
            <h3>🔹 차종별 적용 기준</h3>
            <ol>
                <li><strong>i7:</strong> <b>2022년 12월 16일 이후</b> 등록 차량</li>
                <li><strong>BMW xEV:</strong> <b>2023년 1월 1일 이후</b> 등록 차량</li>
            </ol>
            
            
            <h3>🔹 크레딧 지급 과정</h3>
            <ol>
                <li>BMW Charging App 회원가입 완료</li>
                <li>차량정보 입력 및 인증</li>
                <li>등록된 차량정보 확인 (영업일 기준 1~2일 소요)</li>
                <li>차종별 크레딧 자동 지급</li>
            </ol>
            
            <div class="highlight">
                <strong>💡 안내:</strong><br>
                <b>BMW Charging App > MY차지비 > 크레딧</b>에서 지급된 크레딧을 확인하실 수 있습니다.
            </div>
        `
    },
    'usage-restrictions': {
        title: '사용 제한 및 주의사항',
        content: `
            <h3><b>구매하신 신차에만 사용 가능</b></h3>
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW 전기차 충전 프로모션 혜택은 <b>구매하신 신차에만 사용</b>할 수 있습니다.<br>다른 차량이나 타인에게 양도하는 것은 <b>불가능</b>합니다.</p>
            
            <h3>🔹 금지되는 사용 행위</h3>
            <ol>
                <li><strong>동시 충전:</strong> 여러 차량을 동시에 충전하는 행위</li>
                <li><strong>연속 충전:</strong> 비정상적으로 연속적인 충전 행위</li>
                <li><strong>원거리 충전:</strong> 차량과 거리가 먼 충전기에서의 충전</li>
                <li><strong>타인 양도:</strong> 충전카드나 계정을 타인에게 양도하는 행위</li>
                <li><strong>상업적 이용:</strong> 상업적 목적으로 충전 서비스를 이용하는 행위</li>
            </ol>
            
            <div class="warning-box">
                <strong>⚠️ 서비스 제재:</strong> 위반 시 충전 프로그램 회수, 계정 영구정지 등의 제재가 적용될 수 있습니다.
            </div>
            
            <h3>🔹 정상 사용 가이드</h3>
            <ol>
                <li>본인 소유 차량에서만 충전 이용</li>
                <li>충전 완료 후 즉시 차량 이동</li>
                <li>충전카드 분실 시 즉시 신고</li>
                <li>정기적인 충전 패턴 유지</li>
            </ol>
            
            <div class="highlight">
                <strong>💡 안내:</strong><br>
                충전카드는 개인정보와 연결되어 있으므로 안전하게 보관하시기 바랍니다.
            </div>
            
            <div style="margin-top:20px;text-align:center;">
                <button onclick="openModal('charging-service-guidelines')" style="background:#003366;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background 0.3s ease;">
                    BMW Charging Service 이용 시 유의사항
                </button>
            </div>
        `
    },
    'charging-service-guidelines': {
        title: 'BMW Charging Service 이용 시 유의사항',
        content: `
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW Charging Service 이용 시 주의사항을 안내드립니다.</p>
            
            <h3>📌 1. 혜택 제공 및 이용 제한</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">본 혜택은 BMW 신규 구매 차량에 한하여 제공됩니다.</p>
            <p style="font-size:0.95rem;margin-bottom:8px;">계정, 충전카드, 크레딧 등 혜택은 서비스 대상 차량 외 충전·양도·대여·재판매가 불가합니다.</p>
            <p style="font-size:0.95rem;margin-bottom:8px;">이를 위반할 경우 다음과 같은 조치가 적용됩니다:</p>
            <ul style="font-size:0.95rem;margin-bottom:20px;padding-left:20px;">
                <li>충전 프로그램 회수 등 BMW Charging 서비스의 모든 혜택 즉시 상실</li>
                <li>발생 문제에 대한 모든 책임은 회원에게 귀속</li>
                <li>무단사용 혜택에 대한 손해배상 청구 가능</li>
            </ul>
            
            <h3>⏰ 2. 등록 및 유효기간</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">충전카드는 등록기한 내 활성화 필수입니다.</p>
            <p style="font-size:0.95rem;margin-bottom:8px;">→ 등록기한 내 미등록 시 혜택 제공 불가</p>
            <p style="font-size:0.95rem;margin-bottom:20px;">유효기간 내 사용하지 않은 크레딧은 소멸되며, 환불되지 않습니다.</p>
            
            <h3>💳 3. 충전카드 재발급</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">충전카드 분실·훼손 시 카드형 충전카드로만 유상 재발급 가능합니다.</p>
            <p style="font-size:0.95rem;margin-bottom:8px;">(RF칩 손상 시에도 유상 재발급 / 무선 충전패널 보관 시 주의)</p>
            <p style="font-size:0.95rem;margin-bottom:8px;"><strong>재발급 신청 경로</strong></p>
            <p style="font-size:0.95rem;margin-bottom:20px;">BMW Charging App > MY차지비 > 충전카드 > 충전카드 관리 > 카드 재발급 신청</p>
            
            <h3>🛍️ 4. 쿠폰 스토어 이용</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">지급된 크레딧의 일정 비율만큼만 쿠폰 구매 가능합니다.</p>
            <p style="font-size:0.95rem;margin-bottom:20px;">차종별로 구매 가능한 쿠폰은 상이할 수 있습니다.</p>
            
            <h3>⚠️ 5. 금지행위 및 제재 기준</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">완성차 구매 혜택으로 지급된 크레딧에 대해 아래 행위를 금지합니다.</p>
            <p style="font-size:0.95rem;margin-bottom:15px;">적발 시 별도의 통지 없이 충전카드 정지, 혜택 회수, 계정 영구 정지 등의 제재가 적용될 수 있습니다.</p>
            
            <div style="background:#fff3cd;border:1px solid #ffeaa7;padding:15px;border-radius:8px;margin-bottom:15px;">
                <strong>[유형 1: 유효기간 1개월 축소 또는 1개월 정지]</strong>
                <ul style="font-size:0.95rem;margin-top:8px;padding-left:20px;">
                    <li>서비스 대상 차량 외 차량 충전</li>
                    <li>비정상적인 충전 패턴 및 행위</li>
                    <li>동시·연속·원거리 등 부정 충전</li>
                    <li>허위 정보·부정 방법으로 재산상 이익 취득 또는 제3자에게 취득하게 하는 행위</li>
                </ul>
            </div>
            
            <div style="background:#f8d7da;border:1px solid #f5c6cb;padding:15px;border-radius:8px;margin-bottom:20px;">
                <strong>[유형 2: 혜택 회수 및 계정 영구 정지]</strong>
                <ul style="font-size:0.95rem;margin-top:8px;padding-left:20px;">
                    <li>유형 1의 금지행위가 2회 이상 발생</li>
                    <li>충전카드 또는 계정을 타인에게 양도</li>
                    <li>거래 성사 여부와 관계없이 충전카드 또는 계정을 거래</li>
                </ul>
            </div>
            
            <h3>🔌 6. 충전 이용방법</h3>
            <p style="font-size:0.95rem;margin-bottom:8px;">충전카드를 충전기 인증 단말기에 접촉하여 이용 가능합니다.</p>
            <p style="font-size:0.95rem;margin-bottom:20px;"><strong>차지비 미제휴 충전소(아파트, 자체 운영 시설 등)</strong>에서는 이용이 불가합니다.</p>
        `
    },
    'join-step-1': {
        title: '1. BMW Charging App 설치',
        content: `
            <img src="이미지 파일/app-icon.png" alt="BMW Charging 앱 아이콘" style="width:72px;height:72px;display:block;margin:0 auto 16px;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <div style="display:flex;gap:12px;justify-content:center;margin-bottom:16px;flex-wrap:wrap;">
              <a href="https://apps.apple.com/kr/app/bmw-charging/id1439320862" target="_blank" class="btn btn-primary" style="background:#003366;min-width:140px;margin-bottom:6px;">
                <i class="fab fa-apple"></i> iPhone 다운로드
              </a>
              <a href="https://play.google.com/store/search?q=bmw+charging&c=apps&hl=ko" target="_blank" class="btn btn-primary" style="background:#003366;min-width:140px;margin-bottom:6px;">
                <i class="fab fa-google-play"></i> Android 다운로드
              </a>
            </div>
            <p>App Store 또는 Google Play에서 <b>BMW Charging App</b>을 검색하여 설치하세요.</p>
        `
    },
    'join-step-2': {
        title: '2. 차량 정보 입력',
        content: `
            <div style="display:flex;justify-content:center;margin-bottom:16px;">
                <img src="이미지 파일/vehicle-info.png" alt="차량 정보 입력" style="width:100%;max-width:350px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <p><b>차량번호</b>와 <b>소유자명</b>을 정확하게 입력해주세요.<br>차량등록증을 참고하면 쉽게 확인할 수 있습니다.</p>
            <div style="background:#f8f9fa;border-radius:8px;padding:10px 14px;margin-top:8px;font-size:0.9rem;">
                <b>소유자명 입력 예시:</b> 비엠더블유파이낸셜서비스코리아(주)
            </div>
        `
    },
    'join-step-3': {
        title: '3. 충전카드 등록',
        content: `
            <div style="display:flex;justify-content:center;align-items:center;gap:18px;margin-bottom:12px;flex-wrap:wrap;">
                <img src="이미지 파일/charging-card-register.png" alt="충전카드 등록 예시" style="width:100%;max-width:110px;display:block;margin-right:36px;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:18px;">
                    <span style="font-size:1.05rem;color:#003366;font-weight:700;margin-bottom:2px;">카드형</span>
                    <div style="display:flex;gap:18px;align-items:flex-end;">
                        <img src="이미지 파일/charging-card-standard.png" alt="충전카드 카드형" style="width:100%;max-width:80px;border-radius:3px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                        <img src="이미지 파일/card_i7.png" alt="충전카드 i7 카드형" style="width:100%;max-width:80px;border-radius:3px;">

                    </div>
                    <span style="font-size:1.05rem;color:#003366;font-weight:700;margin:14px 0 2px 0;">키링형</span>
                    <div style="display:flex;gap:18px;align-items:flex-end;">
                    <img src="이미지 파일/charging-card-keyring.png" alt="충전카드 키링형" style="width:100%;max-width:60px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                        <img src="이미지 파일/charging-card-i7-keyring.png" alt="충전카드 i7 키링형" style="width:100%;max-width:60px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                    </div>
                </div>
            </div>
            <p>회원가입 시 <b>충전카드</b> 등록은 필수입니다.<br>앱에서 충전카드 번호 16자리를 입력하고 등록을 완료하세요.</p>
        `
    },
    'join-step-4': {
        title: '4. 승인 완료',
        content: `
            <p style="font-size:0.98rem;text-align:left;margin-bottom:8px;">등록된 차량 정보 확인 후, <b>신차 구매 혜택</b>이 지급됩니다.</p>
            <div style="display:flex;justify-content:center;margin-bottom:16px;">
                <img src="이미지 파일/new-car-benefit.png" alt="신차구매혜택" style="width:100%;max-width:120px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            </div>
            <p style="margin-top:8px;font-size:0.98rem;">※ 단일 상품의 경우 자동지급됩니다.</p>
            <div style="margin-top:18px;">
                <div style="margin-bottom:10px;font-weight:600;color:#003366;">[1] 충전 크레딧 선택 시 유의사항</div>
                <ul style="font-size:0.98rem;line-height:1.7;margin-bottom:14px;">
                    <li>지급된 크레딧은 BMW Charging 앱에서 확인 및 사용 가능합니다.</li>
                    <li>일부 충전소에서는 사용이 제한될 수 있습니다.<br><span style="font-size:0.78rem;color:#666;">(일부 한국도로공사 고속도로 급속 충전기 사용이 불가능할 수 있습니다. *SK일렉링크)</span></li>
                    <li>유효기간 내 사용하지 않으면 자동 소멸됩니다.</li>
                </ul>
                <div style="margin-bottom:10px;font-weight:600;color:#003366;">[2] 홈충전기 설치 선택 시 유의사항</div>
                <ul style="font-size:0.98rem;line-height:1.7;">
                    <li>설치 전 전문 설치업체에서 별도 연락을 드립니다.</li>
                    <li>설치 주소와 연락처 정보를 정확히 입력해 주세요.</li>
                    <li>설치 가능 여부는 현장 점검 결과에 따라 달라질 수 있습니다.</li>
                </ul>
                <div style="background:#f8f9fa;border-radius:8px;padding:12px;margin-top:12px;font-size:0.9rem;line-height:1.6;">
                    <div style="font-weight:600;color:#003366;margin-bottom:8px;">참고:</div>
                    <ul style="margin:0;padding-left:16px;">
                        <li>홈충전기 설치 지원 혜택은 표준공사 범위(30m)를 초과하는 경우, 추가 발생 비용(m당 2만원 등)은 고객 부담입니다.</li>
                        <li>표준공사 미포함 항목: 한국전력 표준시설부담금, 스탠드(20만원), 볼라드(15만원), 바닥도색(20만원) 등 (부가세 별도)</li>
                        <li>홈충전기 설치 지원 혜택 신청전 설치 가능여부를 사전 확인 바랍니다.</li>
                        <li>홈충전기 설치가 불가한 경우, 무제한 충전 크레딧으로 변경됩니다.</li>
                    </ul>
                </div>
            </div>
        `
    },
    'anti-abuse': {
        title: '이용 시 유의사항 (부정사용 금지)',
        content: `
            <h3>부정사용 금지</h3>
            <ul>
                <li>타인에게 충전카드 또는 계정을 양도하는 행위</li>
                <li>상업적 목적(재판매, 대여 등)으로 충전 서비스를 이용하는 행위</li>
                <li>동시 충전, 연속 충전 등 비정상적인 충전 패턴</li>
                <li>허위 정보 등록, 부정한 방법으로 혜택을 취득하는 행위</li>
            </ul>
            <div class="warning-box">
                위와 같은 부정사용이 적발될 경우, 서비스 이용이 제한되거나 계정이 영구 정지될 수 있습니다.
            </div>
            <div class="highlight">
                BMW Charging 서비스는 구매하신 신차에 한해 정상적으로 이용해 주세요.
            </div>
        `
    },
    'roaming-detail': {
        title: '로밍 충전요금 상세 안내',
        content: `
            <h3><b>로밍 충전요금 할인 (Special Tariff)</b></h3>
            <ul>
                <li><b>적용 대상:</b> <b>차지비와 제휴된 로밍 충전사(민간 제휴사)</b></li>
                <li><b>요금:</b> <b>315원/kWh</b> (2023.08.01 기준, BMW 충전 크레딧 결제 시)</li>
            </ul>
            <h4 style="margin-top:18px;"><b>미적용 대상(일반 요금 적용)</b></h4>
            <ul>
                <li><b>차지비(일반요금)</b></li>
                <li><b>환경부(50kW 324.4원, 그 외 347.2원)</b></li>
                <li><b>한국전력(400원)</b></li>
                <li><b>제주도청(320원)</b></li>
            </ul>
            <div class="info-box">
                <b>상기 요금은 BMW 충전 크레딧 결제 시에만 유효</b>하며, 크레딧 및 혜택 소진 이후에는 <b>일반 로밍 요금이 적용</b>됩니다.<br>
                <b>충전요금 할인은 시장 상황에 따라 변동</b>될 수 있습니다.
            </div>
            <div class="highlight">
                자세한 내용은 <a href="https://www.gschargev.co.kr/mobile/mobile_cost_notice" target="_blank" style="color:#003366;text-decoration:underline;font-weight:500;"><b>공식 안내 페이지</b></a>를 참고하세요.
            </div>
        `
    },
    'pnc-detail': {
        title: 'PnC(Plug & Charge) 가입 상세 안내',
        content: `
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW Charging App에 로그인 후, 내 차량 이미지 선택 →<br>PnC 서비스 이용 가능 여부를 확인하고 간단히 신청할 수 있습니다.</p>
            
            <ol style="font-size:1.05rem;line-height:2.2;margin-bottom:20px;">
                <li><b>BMW Charging App 로그인 후 차량 이미지 선택</b></li>
                <li><b>PnC 서비스 가능 여부 확인</b></li>
                <li><b>PnC 서비스 신청 및 약관 동의</b></li>
                <li><b>PnC 서비스 계약 완료</b></li>
            </ol>
            
            <div class="warning-box" style="margin-top:20px;">
                <strong>⚠️ PnC는 지원 차량에 한해 제공됩니다.</strong>
            </div>
        `
    },
    'coupon-detail': {
        title: '프리미엄 라이프 서비스',
        content: `
            <div style="display:flex;gap:15px;margin-bottom:30px;justify-content:center;">
                <button onclick="scrollToSection('coupon-purchase')" style="background:#003366;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background 0.3s ease;flex:1;max-width:200px;">
                    쿠폰 구매
                </button>
                <button onclick="scrollToSection('valet-parking')" style="background:#666;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background 0.3s ease;flex:1;max-width:200px;">
                    발레 주차 (i7 차량)
                </button>
            </div>
            
            <div id="coupon-purchase">
                <h3 style="color:#003366;font-size:1.2rem;margin-bottom:15px;">쿠폰 구매</h3>
                <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">BMW Charging App에서 다양한 쿠폰을 구매하실 수 있습니다.</p>
            
            <ol style="font-size:1.05rem;line-height:2.2;margin-bottom:20px;">
                <li><b>BMW Charging App 로그인</b></li>
                <li><b>MY차지비 > 쿠폰 스토어 메뉴에서 구매하기 선택</b></li>
                <li><b>원하는 쿠폰을 선택하고 크레딧으로 결제 진행</b></li>
                <li><b>구매한 쿠폰은 앱 내 '쿠폰 보관함'에서 확인 가능합니다</b></li>
            </ol>
            
            <div class="warning-box" style="margin-top:20px;">
                <strong>⚠️ 쿠폰 종류 및 상세 내역은 쿠폰 스토어에서 확인해주세요.</strong><br>
                <strong>차량 유형에 따라 구매 가능한 쿠폰의 종류가 달라질 수 있습니다.</strong>
            </div>
            
            <div class="info-box" style="margin-top:25px;padding:15px;">
                <p style="font-size:0.95rem;margin-bottom:12px;color:#666;"><em>※ 쿠폰 종류</em></p>
                
                <div style="margin-bottom:10px;font-size:0.9rem;">
                    <span style="color:#003366;font-weight:500;">GS칼텍스 세차쿠폰</span> - 제휴 세차소에서 이용 가능한 세차 전용 쿠폰
                </div>
                
                <div style="margin-bottom:10px;font-size:0.9rem;">
                    <span style="color:#003366;font-weight:500;">GS칼텍스 주유쿠폰</span> - 전국 GS칼텍스 주유소에서 사용 가능한 주유 전용 쿠폰
                </div>
                
                <div style="font-size:0.9rem;">
                    <span style="color:#003366;font-weight:500;">카카오T 쿠폰</span> - 카카오T 앱 내 택시, 대리, 주차 등 서비스 이용 시 사용 가능
                </div>
            </div>
            
            <h3 style="margin-top:30px;margin-bottom:15px;color:#003366;font-size:1.1rem;">카카오T 포인트 교환</h3>
            <div style="background:#f8f9fa;border:1px solid #e9ecef;padding:15px;border-radius:8px;margin-bottom:20px;">
                <p style="font-size:0.9rem;margin-bottom:8px;color:#666;">(i7, iX 모델 제외)</p>
                <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:0.9rem;">
                    <span><strong>이벤트 혜택:</strong> 차량 구매 시 지급된 포인트는 카카오 T 포인트로 교환 가능</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:10px;font-size:0.9rem;">
                    <span><strong>이벤트 기간:</strong> ~25년 12월 31일까지</span>
                </div>
                <p style="font-size:0.8rem;color:#666;margin:0;">※이벤트 제휴사의 사정에 따라 변경되거나 조기 종료될 수 있습니다.</p>
            </div>
            
            <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">카카오T 포인트란?</h4>
            <p style="font-size:0.9rem;margin-bottom:15px;line-height:1.6;">카카오 T, 카카오내비 앱에서 현금처럼 사용 가능하며, 전기차 충전, 대리, 택시 등 카카오 T 및 카카오내비 주요 서비스에서 사용가능합니다.</p>
            
            <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">모델별 교환 가능 포인트</h4>
            <div style="overflow-x:auto;margin-bottom:15px;">
                <table style="width:100%;border-collapse:collapse;font-size:0.8rem;">
                    <thead>
                        <tr style="background:#f8f9fa;">
                            <th style="border:1px solid #dee2e6;padding:8px;text-align:center;">모델</th>
                            <th style="border:1px solid #dee2e6;padding:8px;text-align:center;">BEV<br>(순수 전기차)</th>
                            <th style="border:1px solid #dee2e6;padding:8px;text-align:center;">PHEV<br>(플러그인 하이브리드)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border:1px solid #dee2e6;padding:8px;font-weight:500;text-align:center;">교환 가능 포인트</td>
                            <td style="border:1px solid #dee2e6;padding:8px;text-align:center;">7만 포인트</td>
                            <td style="border:1px solid #dee2e6;padding:8px;text-align:center;">5만 포인트</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">포인트 차감 상세</h4>
            <p style="font-size:0.9rem;margin-bottom:10px;">포인트 교환 시 10% 수수료가 충전 포인트에서 차감됩니다.</p>
            <div style="background:#f8f9fa;border:1px solid #e9ecef;padding:12px;border-radius:6px;margin-bottom:10px;">
                <p style="font-size:0.9rem;margin-bottom:5px;"><strong>포인트 차감 예시</strong></p>
                <p style="font-size:0.85rem;margin-bottom:3px;">• BEV 모델 7만 포인트 교환 시 7만7천 포인트 차감 후 7만 포인트 적립</p>
                <p style="font-size:0.85rem;margin:0;">• PHEV 모델 5만 포인트 교환 시 5만 5천 포인트 차감 후 5만 포인트 적립</p>
            </div>
            <p style="font-size:0.9rem;margin-bottom:15px;"><strong>유효기간:</strong> 쿠폰번호 발급 및 등록 후 180일</p>
            
            <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">포인트 교환 방법</h4>
            <div style="margin-bottom:15px;">
                <p style="font-size:0.9rem;margin-bottom:8px;"><strong>1. BMW Charging 앱 | 쿠폰 발급 및 난수 번호 확인</strong></p>
                <p style="font-size:0.85rem;color:#666;margin-bottom:10px;">BMW Charging 앱 로그인 ▶ MY차지비 ▶ 쿠폰스토어 ▶ 구매하기 ▶ 카카오T 쿠폰 선택 ▶ 구매하기 ▶ 쿠폰함 ▶ 카카오T 쿠폰 번호 확인</p>
            </div>
            <div>
                <p style="font-size:0.9rem;margin-bottom:8px;"><strong>2. 카카오T 앱 | 쿠폰 번호 등록 및 포인트 지급</strong></p>
                <p style="font-size:0.85rem;color:#666;margin-bottom:15px;">카카오T 앱 로그인 ▶ 내정보 ▶ 포인트 ▶ 쿠폰 번호 등록 ▶ 포인트 지급</p>
            </div>
            
            <div style="background:#f8d7da;border:1px solid #f5c6cb;padding:12px;border-radius:6px;margin-top:15px;">
                <p style="font-size:0.9rem;margin:0;color:#721c24;"><strong>⚠️ 주의사항:</strong> 카카오T 앱에 등록된 쿠폰은 환불이 불가능합니다.</p>
            </div>
            </div>
            
            <div id="valet-parking" style="margin-top:40px;">
                <h3 style="color:#003366;font-size:1.2rem;margin-bottom:15px;">발레 주차</h3>
                <h4 style="color:#003366;font-size:1.1rem;margin-bottom:15px;">i7 고객님께 드리는 충전 대행 서비스</h4>
                <p style="font-size:0.9rem;line-height:1.8;margin-bottom:20px;">커피연구소 이디야 커피랩 방문 시 전기차 충전 대행 서비스와 발레 주차가 결합된 특별한 경험을 드립니다.</p>
                
                <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">제공 서비스</h4>
                <div style="background:#f8f9fa;border:1px solid #e9ecef;padding:15px;border-radius:8px;margin-bottom:20px;">
                    <p style="font-size:0.9rem;margin-bottom:10px;font-weight:600;">충전 대행 및 발레 주차 라이트 상품 (3회)</p>
                    <ul style="font-size:0.9rem;line-height:1.6;margin:0;padding-left:20px;">
                        <li>약 25kWh 충전 대행 및 발레 주차 무료 (*주차비 별도)</li>
                        <li>이디야 커피랩 상품 구매시 1시간 주차 무료 (*2만원 이상 구매시 2시간 무료)</li>
                        <li>초과 주차비용은 고객 부담입니다.</li>
                    </ul>
                </div>
                
                <h4 style="color:#003366;font-size:1rem;margin-bottom:10px;">이용 방법</h4>
                <ol style="font-size:0.9rem;line-height:1.6;margin-bottom:20px;padding-left:20px;">
                    <li>이디야 커피랩 발레 부스 방문 후 BMW i7 Charging 충전카드를 제시해주세요.</li>
                    <li>이디야 커피랩 위치: 서울시 강남구 논현로 636</li>
                </ol>
                
                <div style="text-align:center;margin-top:25px;">
                    <button onclick="window.open('https://carner.kakaomobility.com/web2app/bridge?action=kakaonavi%3A%2F%2Fcommon%3Fdata%3D%7B%22page%22%3A%22search_place%22%2C%22keyword%22%3A%22%EC%9D%B4%EB%94%94%EC%95%BC%EC%BB%A4%ED%94%BC%EB%9E%A9%22%7D%26ref%3Dchargev_bmw', '_blank')" style="background:#003366;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1rem;cursor:pointer;transition:background 0.3s ease;">
                        위치 확인하기
                    </button>
                </div>
            </div>
        `
    },
    'charging-station-detail': {
        title: 'BMW 차징스테이션 소개',
        content: `
            <h3>BMW 차징허브라운지</h3>
            <p style="font-size:0.9rem;line-height:1.8;margin-bottom:12px;">BMW 그룹 코리아의 전 세계 첫 라운지형 급속 충전소인 BMW 차징 허브 라운지는 전기차 충전과 카페를 동시에 이용할 수 있는 특화된 전기차 충전소입니다.</p>
            <div style="display:flex;justify-content:center;align-items:center;margin-bottom:16px;width:100%;">
                <img src="이미지 파일/charging-hub.png" alt="BMW CHARGING HUB" style="max-width:500px;max-height:250px;width:auto;height:auto;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.08);object-fit:cover;">
            </div>
            <div class="highlight" style="margin-bottom:16px;">
                <a href="https://blog.naver.com/bmwgroupkorea/223786870302" target="_blank" style="color:#003366;text-decoration:underline;font-weight:500;">차징허브라운지 상세 안내 보기</a>
            </div>
            <h3>BMW 차징스테이션 특징</h3>
            <ul style="font-size:1.05rem;line-height:2;">
                <li>BMW 전용 충전기로 안전하고 빠른 충전</li>
                <li>BMW Charging App으로 간편한 결제 및 이용</li>
                <li>전국 주요 지역에 설치된 BMW 차징스테이션</li>
                <li>24시간 이용 가능한 편리한 서비스<br><span style="font-size:0.9rem;color:#666;">(일부 충전소는 운영시간을 확인해주세요)</span></li>
            </ul>
            <h3>이용 방법</h3>
            <ol style="font-size:1.05rem;line-height:2.2;margin-bottom:20px;">
                <li>BMW Charging App에서 주변 충전기 검색</li>
                <li>원하는 BMW 차징스테이션 선택</li>
                <li>충전기 번호 확인 후, BMW Charging 앱에서 결제 및 충전 시작</li>
                <li>충전 완료 후 앱에서 이용 내역 확인 가능</li>
            </ol>
            
            <div class="warning-box" style="margin-top:20px;">
                <strong>⚠️ BMW 차징스테이션의 위치 및 상세 정보는<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMW Charging App에서 확인하실 수 있습니다.</strong>
            </div>
        `
    }
};

// Modal open function
function openModal(modalType) {
    const content = modalContent[modalType];
    if (content) {
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 모달이 열릴 때 스크롤을 상단으로 이동
        setTimeout(() => {
            modal.scrollTop = 0;
        }, 10);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Event listeners ([data-modal] 속성이 있는 모든 요소)
    document.querySelectorAll('[data-modal]').forEach(card => {
        // Accessibility hints
        if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');
        if (!card.hasAttribute('role')) card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.getAttribute('data-modal');
            const content = modalContent[modalType];
            if (content) {
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                this.setAttribute('aria-pressed', 'true');
            }
        });
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.querySelectorAll('[data-modal][aria-pressed="true"]').forEach(el => el.setAttribute('aria-pressed', 'false'));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation to cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    document.querySelectorAll('.service-card, .step, .note-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}); 